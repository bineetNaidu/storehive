import { Button } from '@/components/Button';
import { FC } from 'react';
import { FaTrash } from 'react-icons/fa';

export const DangerZone: FC = () => {
  return (
    <div className="mt-4 border border-gray-200 rounded-md p-4 w-[500px] shadow-sm bg-gray-100">
      <h1 className="text-2xl font-bold text-brand-font-color mb-2">
        Danger Zone
      </h1>

      <Button size="md" className="bg-red-600">
        <FaTrash size={16} className="text-white inline-block mr-2" />
        Delete My Account, this action is irreversible
      </Button>
    </div>
  );
};
