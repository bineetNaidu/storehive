import { SignUp } from '@clerk/nextjs';
import type { NextPage } from 'next';

const RegisterPage: NextPage = () => (
  <SignUp path="/register" routing="path" signInUrl="/login" />
);

export default RegisterPage;
