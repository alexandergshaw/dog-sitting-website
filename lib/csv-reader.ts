import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export interface Review {
  dog_name: string;
  owner_name: string;
  rating: number;
  comment?: string;
  date: string;
}

export interface Stats {
  total_dogs: number;
  years_experience: number;
  rating: number;
  total_reviews: number;
  repeat_clients: number;
  happy_families: number;
}

export async function getReviews(): Promise<Review[]> {
  const csvPath = path.join(process.cwd(), 'data', 'reviews.csv');
  const fileContent = fs.readFileSync(csvPath, 'utf-8');
  
  return new Promise((resolve, reject) => {
    Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const reviews = results.data.map((row: any) => ({
          dog_name: row.dog_name,
          owner_name: row.owner_name,
          rating: parseInt(row.rating),
          comment: row.comment || undefined,
          date: row.date,
        }));
        resolve(reviews);
      },
      error: (error: any) => reject(error),
    });
  });
}

export async function getStats(): Promise<Stats> {
  const reviews = await getReviews();
  
  // Calculate average rating
  const rating = reviews.length > 0 
    ? Math.round((reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length) * 10) / 10
    : 5.0;
  
  // Calculate years of experience from earliest review
  const dates = reviews.map(r => new Date(r.date));
  const earliestDate = dates.length > 0 ? new Date(Math.min(...dates.map(d => d.getTime()))) : new Date();
  const yearsExperience = Math.max(1, new Date().getFullYear() - earliestDate.getFullYear());
  
  // Count unique families (owners)
  const uniqueFamilies = new Set(reviews.map(r => r.owner_name)).size;
  
  // Total dogs is simply the number of rows (each dog booking is a row)
  const totalDogs = reviews.length;
  
  // Calculate repeat customers (owners who have booked multiple dogs or multiple times)
  const ownerCounts = reviews.reduce((acc, r) => {
    acc[r.owner_name] = (acc[r.owner_name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Count how many owners have booked more than once
  const repeatCustomerCount = Object.values(ownerCounts).filter(count => count > 1).length;
  
  return {
    total_dogs: totalDogs,
    years_experience: yearsExperience,
    rating: rating,
    total_reviews: reviews.length,
    repeat_clients: repeatCustomerCount,
    happy_families: uniqueFamilies,
  };
}

export async function getAverageRating(): Promise<number> {
  const reviews = await getReviews();
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
