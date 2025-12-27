import { NextResponse } from 'next/server';
import { getReviews } from '@/lib/csv-reader';

export async function GET() {
  try {
    const reviews = await getReviews();
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Error reading reviews:', error);
    return NextResponse.json(
      { error: 'Failed to load reviews' },
      { status: 500 }
    );
  }
}
