import * as argon2 from 'argon2';
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const registerReqBodySchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address.')
    .nonempty('Please enter an email address.'),
  password: z
    .string()
    .min(8, 'Password must contain at least 8 character(s)')
    .nonempty('Please enter a password.'),
  name: z
    .string()
    .min(1, 'Password must contain at least 1 character(s)')
    .nonempty('Please enter a name.'),
  image: z.string().url('Please enter a valid image URL.').optional(),
});

export const POST = async (req: Request) => {
  const body = await req.json();

  const validInputs = registerReqBodySchema.safeParse(body);

  if (!validInputs.success) {
    return NextResponse.json(
      { errors: validInputs.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { email, password, name, image } = validInputs.data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser)
    return NextResponse.json(
      {
        errors: {
          email: [
            'This email is already in use. Please use a different email.',
          ],
        },
      },
      { status: 400 }
    );

  const hashedPassword = await argon2.hash(password, { hashLength: 14 });

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      image,
    },
  });

  return NextResponse.json(
    {
      result: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
      },
    },
    { status: 201 }
  );
};
