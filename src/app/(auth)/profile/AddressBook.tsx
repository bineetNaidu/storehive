import { Button } from '@/components/Button';
import { FC } from 'react';
import { FaEdit } from 'react-icons/fa';

export const AddressBook: FC = () => {
  return (
    <div className="mt-4 border border-gray-200 rounded-md p-4 w-[500px] shadow-sm bg-gray-100">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-brand-font-color">
          Address Book
        </h1>

        <Button size="sm">
          <FaEdit size={16} />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 w-96">
        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Country</h2>
          <p className="text-gray-700 font-medium">United kingdon</p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">City/state</h2>
          <p className="text-gray-700 font-medium">Leeds, East Landon</p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Postal Code</h2>
          <p className="text-gray-700 font-medium">LS1 1AA</p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Tax ID</h2>
          <p className="text-gray-700 font-medium">123456789</p>
        </div>
      </div>
    </div>
  );
};
