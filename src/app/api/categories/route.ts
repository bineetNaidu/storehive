import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  const includeProduct = searchParams.get('includeProduct');
  const orderBy = searchParams.get('orderBy') as 'desc' | 'asc';

  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany({
    take: limit ? parseInt(limit) : undefined,
    orderBy: {
      createdAt: orderBy ?? undefined,
    },
    include: {
      products: !!includeProduct && {
        include: {
          categories: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  await prisma.$disconnect();

  return NextResponse.json({
    count: categories.length,
    result: categories,
  });
}
