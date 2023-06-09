import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { category_id: string };
  }
) {
  const { category_id } = params;

  const { searchParams } = new URL(request.url);
  const productsLimit = searchParams.get('productsLimit');

  const prisma = new PrismaClient();

  const category = await prisma.category.findUnique({
    where: {
      id: parseInt(category_id),
    },
    include: {
      products: {
        take: productsLimit ? parseInt(productsLimit) : undefined,
        orderBy: {
          createdAt: 'desc',
        },
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
    result: category,
  });
}
