import { authOptions } from '@/lib/auth-options';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export type DeleteReviewResponse = {
  result?: {
    deleted_id: string;
  };
  error?: string;
};

export async function DELETE(
  _request: Request,
  { params }: { params: { product_id: string; review_id: string } }
) {
  const { product_id, review_id } = params;

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        error: 'Unauthenticated',
      },
      { status: 401 }
    );
  }

  const prisma = new PrismaClient();

  const review = await prisma.review.findUnique({
    where: {
      id: parseInt(review_id),
    },
  });

  if (!review) {
    return NextResponse.json(
      {
        error: 'Review Not Found!',
      },
      {
        status: 404,
      }
    );
  }

  const validProductId = review.productId === parseInt(product_id);

  const isAuthorizedUser = session.user.id === review.userId;

  if (!validProductId && !isAuthorizedUser) {
    return NextResponse.json(
      {
        error: 'Forbidden!',
      },
      { status: 403 }
    );
  }

  await prisma.review.delete({
    where: {
      id: review.id,
    },
  });

  return NextResponse.json({
    result: {
      deleted_id: review_id,
    },
  });
}
