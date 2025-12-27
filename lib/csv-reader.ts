import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export interface Review {
  name: string;
  rating: number;
  comment: string;
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
          name: row.name,
          rating: parseInt(row.rating),
          comment: row.comment,
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
  
  // Count unique reviewers (happy families)
  const uniqueReviewers = new Set(reviews.map(r => r.name)).size;
  
  // Estimate total dogs watched (assume ~2 dogs per family on average)
  const totalDogs = Math.round(uniqueReviewers * 2.1);
  
  // Calculate repeat client percentage (looking for repeated names)
  const nameCounts = reviews.reduce((acc, r) => {
    acc[r.name] = (acc[r.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const repeatCount = Object.values(nameCounts).filter(count => count > 1).length;
  const repeatClients = uniqueReviewers > 0 
    ? Math.round((repeatCount / uniqueReviewers) * 100)
    : 0;
  
  return {
    total_dogs: totalDogs,
    years_experience: yearsExperience,
    rating: rating,
    total_reviews: reviews.length,
    repeat_clients: repeatClients,
    happy_families: uniqueReviewers,
  };
}

export async function getAverageRating(): Promise<number> {
  const reviews = await getReviews();
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
