import { PrismaClient, type Prisma, type Product } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  {
    params,
  }: {
    params: { product_id: string };
  }
) {
  const { product_id } = params;

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
    },
  });

  await prisma.$disconnect();

  return NextResponse.json({
    result: product,
  });
}

export type GetProductByIdResponse = {
  result:
    | (Product & {
        _count: Prisma.ProductCountOutputType;
        categories: {
          id: number;
          name: string;
        }[];
      })
    | null;
};
