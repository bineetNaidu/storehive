import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function PUT(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      {
        error: 'Unauthorized',
      },
      { status: 401 }
    );
  }

  const updateReqBodySchema = z.object({
    name: z
      .string()
      .min(3, { message: 'Name must be at least 3 characters long' })
      .max(255, { message: 'Name must be at most 255 characters long' }),
    image: z.string().url({ message: 'Image must be a valid URL' }),
    phoneNumber: z
      .string()
      .min(10, { message: 'Phone number must be at least 10 characters long' })
      .max(10, { message: 'Phone number must be at most 10 characters long' }),
  });

  const body = await req.json();

  const parsedBody = updateReqBodySchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json(
      {
        errors: parsedBody.error.flatten().fieldErrors,
      },
      {
        status: 400,
      }
    );
  }

  const user = await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      name: parsedBody.data.name,
      image: parsedBody.data.image,
    },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
    },
  });

  return NextResponse.json(
    {
      result: user,
    },
    {
      status: 200,
    }
  );
}

export type UpdateProfileResponse = {
  result?: {
    id: string;
    email: string;
    name: string | null;
    image: string | null;
  };
  errors?: {
    name?: string[] | undefined;
    image?: string[] | undefined;
    phoneNumber?: string[] | undefined;
  };
};

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
