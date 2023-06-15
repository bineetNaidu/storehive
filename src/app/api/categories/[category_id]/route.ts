import { prisma } from '@/lib/prisma';
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

  return NextResponse.json({
    result: category,
  });
}
