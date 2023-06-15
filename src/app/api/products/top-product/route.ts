import { prisma } from '@/lib/prisma';
import type { Product } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const minPrice = searchParams.get('minPrice');

  const products = await prisma.product.findMany({
    take: limit ? parseInt(limit) : undefined,
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      price: {
        gte: minPrice ? parseInt(minPrice) : 500,
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

export type GetTopProductResponse = {
  count: number;
  result: (Product & {
    categories: {
      name: string;
      id: number;
    }[];
  })[];
};
