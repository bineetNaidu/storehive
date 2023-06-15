import { prisma } from '@/lib/prisma';
import type { Product } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');

  const products = await prisma.product.findMany({
    take: limit ? parseInt(limit) : undefined,
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      price: {
        gte: 0,
        lte: 80,
      },
    },
    include: {
      categories: { select: { name: true, id: true } },
    },
  });

  return NextResponse.json({
    count: products.length,
    result: products,
  });
}

export type GetDealsResponse = {
  count: number;
  result: (Product & {
    categories: {
      name: string;
      id: number;
    }[];
  })[];
};
