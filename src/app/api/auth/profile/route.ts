import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export type DeleteProfileResponse = {
  error?: string;
};

export async function DELETE() {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
      },
      { status: 401 }
    );
  }

  await prisma.user.delete({
    where: {
      email: session.user.email,
    },
  });

  return NextResponse.json({
    result: 'ok',
  });
}
