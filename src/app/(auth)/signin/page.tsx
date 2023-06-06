import { NextPage } from 'next';
import { AuthForm } from './AuthForm';

const SigninPage: NextPage = () => {
  return (
    <main className="h-[calc(100vh-10rem)] flex flex-col justify-center">
      <div className="text-center mb-2">
        <h1 className="text-brand-secondary font-semibold text-2xl ">
          Join the hive!
        </h1>
        <h2>and discover endless shopping possibilities</h2>
      </div>
      <AuthForm />
    </main>
  );
};

export default SigninPage;
