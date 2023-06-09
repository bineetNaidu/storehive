import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { product_id: string };
  }
) {
  const { product_id } = params;

  const { searchParams } = new URL(request.url);
  const reviewsLimit = searchParams.get('reviewsLimit');

  const prisma = new PrismaClient();

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(product_id),
    },
    include: {
      _count: true,
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
      reviews: {
        take: reviewsLimit ? parseInt(reviewsLimit) : undefined,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  });

  await prisma.$disconnect();

  return NextResponse.json({
    result: product,
  });
}
