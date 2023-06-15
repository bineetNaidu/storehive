import { Button } from '@/components/Button';
import { PrismaClient } from '@prisma/client';
import type { NextPage } from 'next';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import { PersonalDetails } from './PersonalDetails';
import { AddressBook } from './AddressBook';
import { DangerZone } from './DangerZone';

const fetchProfile = async () => {
  const prisma = new PrismaClient();
  const session = await getServerSession();

  if (!session) {
    return {
      error:
        'You must be signed in to view, the protected content on this page.',
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
      emailVerified: true,
      accounts: {
        select: {
          id: true,
          provider: true,
        },
      },
    },
  });

  if (!user) {
    return {
      error: 'User not found.',
    };
  }

  await prisma.$disconnect();

  return {
    profile: user,
  };
};

const ProfilePage: NextPage = async () => {
  const { error, profile } = await fetchProfile();

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="h-[calc(100vh-10rem)]">
      <div>
        <h1 className="text-2xl font-bold text-brand-font-color">My Profile</h1>

        <div className="flex items-center p-4 border rounded-md shadow-sm justify-between w-[500px]">
          <article className="flex items-center">
            <div className="w-16 h-16 mr-1 overflow-hidden rounded-full">
              <Image
                src={profile.image!}
                alt={profile.name!}
                width={64}
                height={64}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-font-color">
                {profile.name}
              </h2>
              <p className="text-gray-500">{profile.email}</p>
            </div>
          </article>

          <article className="flex flex-col items-end space-y-2">
            <Button size="sm">
              <FaEdit className="inline-block mr-2" size={16} />
              Edit
            </Button>
          </article>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <PersonalDetails profile={profile} />
        <AddressBook />
        <DangerZone />
      </div>
    </div>
  );
};

export default ProfilePage;
