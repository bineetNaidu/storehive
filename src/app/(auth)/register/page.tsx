'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Register: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState<Record<string, string[]>>({});
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!email || !password || !name)
        throw Error('Please fill all the fields');

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, image }),
      });

      const json = await res.json();

      if (json.errors !== null) throw Error(JSON.stringify(json.errors));

      toast.success('Account created successfully, please login now!');

      // reset all the states
      setEmail('');
      setPassword('');
      setName('');
      setImage('');
      setError({});

      // redirect to signin page
      router.push('/signin');
    } catch (error: any) {
      const err = JSON.parse(error.message) as { [key: string]: string[] };
      setError(err);
    }
  };
  return (
    <main className="h-[calc(100vh-10rem)] flex flex-col justify-center">
      <div className="text-center mb-2">
        <h1 className="text-brand-secondary font-semibold text-2xl ">
          Join the hive!
        </h1>
        <h2>and discover endless shopping possibilities</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-6">
              <InputField
                label="Your Name?"
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                message={error['name'] ? error['name'].join(',') : undefined}
              />
              <InputField
                label="Your Email?"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                message={error['email'] ? error['email'].join(',') : undefined}
              />
              <InputField
                label="Password"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                message={
                  error['password'] ? error['password'].join(',') : undefined
                }
              />
              <InputField
                label="Avatar?"
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                message={error['image'] ? error['image'].join(',') : undefined}
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit">Join!</Button>
              <Link href="/signin">
                <Button size="sm" varient="secondary">
                  Have an account?
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
