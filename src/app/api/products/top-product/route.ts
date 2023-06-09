import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const minPrice = searchParams.get('minPrice');

  const prisma = new PrismaClient();

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

  await prisma.$disconnect();

  return NextResponse.json({
    count: products.length,
    result: products,
  });
}
