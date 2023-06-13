import { z } from 'zod';

const configSchema = z.object({
  google: z.object({
    clientId: z.string().nonempty({ message: 'Google Client ID is required' }),
    clientSecret: z
      .string()
      .nonempty({ message: 'Google Client Secret is required' }),
  }),
});

export const configuration = configSchema.parse({
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  },
});
