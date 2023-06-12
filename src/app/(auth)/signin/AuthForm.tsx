'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export const AuthForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      if (!email || !password) {
        toast.error('Please fill all the fields');
        return;
      }

      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/',
      });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <InputField
              label="Your Email?"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputField
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Remember me</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent toggle-sm"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">Sign In</Button>
            <Link href="/register">
              <Button size="sm" varient="secondary">
                Create an account?
              </Button>
            </Link>
          </div>
        </form>
        <div className="divider">otherwise</div>
        <div className="flex justify-center gap-2">
          <Button
            varient="outlined"
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            <FaGoogle />
          </Button>
          <Button varient="outlined" disabled>
            <FaTwitter />
          </Button>
          <Button varient="outlined" disabled>
            <FaGithub />
          </Button>
        </div>
      </div>
    </div>
  );
};
