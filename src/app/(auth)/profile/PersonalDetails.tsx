'use client';

import { FC, useState, useCallback } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaEdit, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import Image from 'next/image';
import { UpdateProfileResponse } from '@/app/api/auth/profile/route';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

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
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [name, setName] = useState(profile.name!);
  const [image, setImage] = useState(profile.image!);
  const [phoneNumber, setPhoneNumber] = useState('9876543210');
  const [error, setError] = useState({
    name: '',
    image: '',
    phoneNumber: '',
  });

  const { update } = useSession();

  const handleUpdate = useCallback(async () => {
    if (!name) {
      setError((prev) => ({ ...prev, name: 'Name is required.' }));
      return;
    }

    if (!image) {
      setError((prev) => ({ ...prev, image: 'Image is required.' }));
      return;
    }

    if (!phoneNumber) {
      setError((prev) => ({
        ...prev,
        phoneNumber: 'Phone number is required.',
      }));
      return;
    }

    setIsUpdating(true);

    try {
      const res = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          image,
          phoneNumber,
        }),
      });

      const data: UpdateProfileResponse = await res.json();

      if (data.errors) {
        setError({
          name: data.errors.name?.join(', ') || '',
          image: data.errors.image?.join(', ') || '',
          phoneNumber: data.errors.phoneNumber?.join(', ') || '',
        });

        setIsUpdating(false);
        return;
      }

      if (!data.result) {
        toast.error('Something went wrong!');
        setIsUpdating(false);
        return;
      }

      await update({
        name: data.result.name,
        image: data.result.image,
      });

      toast.success('Profile updated successfully!', {
        icon: <BsCheck2Circle size={15} />,
      });

      setName(data.result.name!);
      setImage(data.result.image!);

      setIsEditingMode(false);
      setIsUpdating(false);
      setError({
        name: '',
        image: '',
        phoneNumber: '',
      });
    } catch (error: any) {
      toast.error(error.message);
      setIsUpdating(false);
    }
  }, [name, image, phoneNumber, update]);

  return (
    <div className="mt-4 border border-gray-200 rounded-md p-4 w-full md:w-[500px] shadow-sm bg-gray-100">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-brand-font-color">
          Personal Details
        </h1>

        <div className="flex gap-1">
          {isEditingMode && (
            <Button
              type="button"
              size="sm"
              onClick={handleUpdate}
              isLoading={isUpdating}
            >
              Update!
            </Button>
          )}

          <Button
            type="button"
            size="sm"
            onClick={() => setIsEditingMode((prev) => !prev)}
            disabled={isUpdating}
          >
            {isEditingMode ? <RxCross2 size={15} /> : <FaEdit size={15} />}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 w-96">
        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Name</h2>
          {isEditingMode ? (
            <InputField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              message={error.name}
              placeholder="John Doe"
            />
          ) : (
            <p className="text-gray-700 font-medium">{name}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Email</h2>
          <p className="text-gray-700 font-medium">{profile.email}</p>
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Phone</h2>
          {isEditingMode ? (
            <InputField
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              message={error.phoneNumber}
              placeholder="+100 9876543210"
            />
          ) : (
            <p className="text-gray-700 font-medium">{phoneNumber}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <h2 className="text-sm">Image</h2>
          {isEditingMode ? (
            <InputField
              placeholder="https://example.com/image.png"
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              message={error.image}
            />
          ) : (
            <Image
              src={image!}
              alt="Profile Image"
              width={30}
              height={30}
              className="rounded-full"
            />
          )}
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
