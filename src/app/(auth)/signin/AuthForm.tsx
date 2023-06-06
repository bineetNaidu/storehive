'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { FaGoogle, FaGithub, FaTwitter } from 'react-icons/fa';

export const AuthForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
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
            <Button size="sm" varient="secondary">
              Forgot Password?
            </Button>
          </div>
          <div className="divider">OR</div>
          <div className="flex justify-center gap-2">
            <Button varient="outlined">
              <FaGoogle />
            </Button>
            <Button varient="outlined">
              <FaTwitter />
            </Button>
            <Button varient="outlined">
              <FaGithub />
            </Button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy; {new Date().getUTCFullYear()} StoreHive Corp. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};
