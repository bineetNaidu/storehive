import { prisma } from '@/lib/prisma';
import type { Prisma, Product, Variation, Option } from '@prisma/client';
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

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(product_id),
    },
    include: {
      variations: {
        select: {
          id: true,
          type: true,
          productId: true,
          options: true,
        },
      },
      _count: true,
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

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
        variations: (Pick<Variation, 'id' | 'type' | 'productId'> & {
          options: Option[];
        })[];
      })
    | null;
};
