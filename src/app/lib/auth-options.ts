import type { AuthOptions } from 'next-auth';
import type { Adapter } from 'next-auth/adapters';
import * as argon2 from 'argon2';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { z } from 'zod';
import { randomBytes, randomUUID } from 'crypto';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient, User } from '@prisma/client';
import { configuration } from './configuration';

const prisma = new PrismaClient();
const prismaAdapter = PrismaAdapter(prisma) as Adapter<PrismaClient>;

const loginReqBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const authOptions: AuthOptions = {
  adapter: prismaAdapter,
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: configuration.google.clientId,
      clientSecret: configuration.google.clientSecret,
    }),
    CredentialsProvider({
      id: 'credentials',
      type: 'credentials',
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        const { success } = loginReqBodySchema.safeParse(credentials);
        if (!success) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials!.email,
          },
        });

        if (!user) return null;

        const isValidPassword = await argon2.verify(
          user.password!,
          credentials!.password
        );

        if (!isValidPassword) return null;

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development',
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex');
    },
  },
  callbacks: {
    session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.email = (user as User).email;
        console.log({ user });
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',
  },
};
