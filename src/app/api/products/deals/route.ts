import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');

  const prisma = new PrismaClient();

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

  await prisma.$disconnect();

  return NextResponse.json({
    count: products.length,
    result: products,
  });
}
