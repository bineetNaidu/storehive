'use client';

import { Button } from '@/components/Button';
import { signOut } from 'next-auth/react';
import { FC, useState, useCallback } from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

export const DangerZone: FC = () => {
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = useCallback(async () => {
    setLoading(true);
    try {
      toast.info('Account terminating, please wait...');
      const res = await fetch('/api/auth/profile', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      toast.success('Account deleted successfully', {
        onClose: async () => {
          setLoading(false);
          await signOut({
            callbackUrl: '/',
          });
        },
      });
    } catch (err: any) {
      toast.error(err.message);
      console.error(err);
      setLoading(false);
    }
  }, []);

  return (
    <div className="mt-4 border border-gray-200 rounded-md p-4 w-full md:w-[500px] shadow-sm bg-gray-100">
      <h1 className="text-2xl font-bold text-brand-font-color mb-2">
        Danger Zone
      </h1>

      <Button
        size="md"
        className="bg-red-600 hover:bg-red-700 text-xs md:text-base font-medium"
        onClick={handleDeleteAccount}
        isLoading={loading}
      >
        <FaTrash size={16} className="text-white inline-block mr-2" />
        Delete My Account, this action is irreversible
      </Button>
    </div>
  );
};
