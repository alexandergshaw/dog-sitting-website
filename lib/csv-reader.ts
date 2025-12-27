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
  const csvPath = path.join(process.cwd(), 'data', 'stats.csv');
  const fileContent = fs.readFileSync(csvPath, 'utf-8');
  
  return new Promise((resolve, reject) => {
    Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const stats: any = {};
        results.data.forEach((row: any) => {
          const value = row.value.includes('.') ? parseFloat(row.value) : parseInt(row.value);
          stats[row.metric] = value;
        });
        resolve(stats as Stats);
      },
      error: (error: any) => reject(error),
    });
  });
}

export async function getAverageRating(): Promise<number> {
  const reviews = await getReviews();
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}
