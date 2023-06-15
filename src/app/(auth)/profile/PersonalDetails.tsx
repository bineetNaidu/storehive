import { FC } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaEdit, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { Button } from '@/components/Button';

type Props = {
  profile: {
    id: string;
    email: string;
    name: string | null;
    image: string | null;
    emailVerified: Date | null;
    accounts: {
      id: string;
      provider: string;
    }[];
  };
};

export const PersonalDetails: FC<Props> = ({ profile }) => {
  return (
    <div className="mt-4 border border-gray-200 rounded-md p-4 w-[500px] shadow-sm bg-gray-100">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-brand-font-color">
          Personal Details
        </h1>

        <Button size="sm">
          <FaEdit size={16} />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 w-96">
        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Name</h2>
          <p className="text-gray-700 font-medium">{profile.name}</p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Email</h2>
          <p className="text-gray-700 font-medium">{profile.email}</p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Phone</h2>
          <p className="text-gray-700 font-medium">+100 9876543210</p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Email Verified</h2>
          <p className="text-gray-700 font-medium">
            {profile.emailVerified ? (
              <BsCheck2Circle
                className="inline-block text-green-500"
                size={20}
              />
            ) : (
              <>
                <span className="text-red-500 mr-2">Not Verified</span>
                <Button size="sm">Verify</Button>
              </>
            )}
          </p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Accounts Linked</h2>
          <p className="text-gray-700 font-medium">
            {profile.accounts.map((account) => {
              if (account.provider === 'google') {
                return (
                  <Button size="sm" className="mr-1" key={account.id}>
                    <FaGoogle size={15} />
                  </Button>
                );
              }

              if (account.provider === 'twitter') {
                return (
                  <Button size="sm" className="mr-1" key={account.id}>
                    <FaTwitter size={15} />
                  </Button>
                );
              }

              if (account.provider === 'github') {
                return (
                  <Button size="sm" className="mr-1" key={account.id}>
                    <FaGithub size={15} />
                  </Button>
                );
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
