import { authOptions } from '@/app/lib/auth-options';
import { PrismaClient, type Review } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET(
  request: Request,
  { params }: { params: { product_id: string } }
) {
  const { product_id } = params;

  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');

  const prisma = new PrismaClient();

  const reviews = await prisma.review.findMany({
    where: {
      productId: parseInt(product_id),
    },
    take: limit ? parseInt(limit) : undefined,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  await prisma.$disconnect();

  return NextResponse.json({
    result: reviews,
  });
}

export type GetReviewsByProductIdResponse = {
  result: (Review & {
    user: {
      id: string;
      name: string | null;
      image: string | null;
    };
  })[];
};

export async function POST(
  request: Request,
  { params }: { params: { product_id: string } }
) {
  const { product_id } = params;
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
      },
      { status: 401 }
    );
  }

  const body = await request.json();

  const bodySchema = z.object({
    rating: z
      .number()
      .int({
        message: 'Rating must be an integer',
      })
      .min(1, {
        message: 'Rating must be between 1 and 5',
      })
      .max(5, { message: 'Rating must be between 1 and 5' }),
    comment: z
      .string()
      .min(1, {
        message: 'Comment must be between 1 and 1024 characters',
      })
      .max(1024, { message: 'Comment must be between 1 and 1024 characters' }),
  });

  const validationResult = bodySchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: validationResult.error.flatten(),
      },
      { status: 400 }
    );
  }

  const prisma = new PrismaClient();

  const review = await prisma.review.create({
    data: {
      rating: validationResult.data.rating,
      comment: validationResult.data.comment,
      product: {
        connect: {
          id: parseInt(product_id),
        },
      },
      user: {
        connect: {
          id: session.user.id,
        },
      },
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  await prisma.$disconnect();

  return NextResponse.json(
    {
      result: review,
    },
    { status: 201 }
  );
}

export type CreateReviewByProductIdResponse = {
  result: Review & {
    user: {
      image: string | null;
      id: string;
      name: string | null;
    };
  };
  error?: string;
};
