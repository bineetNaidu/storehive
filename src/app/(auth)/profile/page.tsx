import Image from 'next/image';
import type { NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { PersonalDetails } from './PersonalDetails';
import { AddressBook } from './AddressBook';
import { DangerZone } from './DangerZone';
import { prisma } from '@/lib/prisma';

// const fetchProfile = async () => {
//   const session = await getServerSession();

//   if (!session) {
//     return {
//       error:
//         'You must be signed in to view, the protected content on this page.',
//     };
//   }

//   const user = await prisma.user.findUnique({
//     where: {
//       email: session.user.email,
//     },
//     select: {
//       id: true,
//       email: true,
//       name: true,
//       image: true,
//       emailVerified: true,
//       accounts: {
//         select: {
//           id: true,
//           provider: true,
//         },
//       },
//     },
//   });

//   if (!user) {
//     return {
//       error: 'User not found.',
//     };
//   }

//   return {
//     profile: user,
//   };
// };

const ProfilePage: NextPage = async () => {
  const session = await getServerSession();

  console.log('>>>> session', JSON.stringify(session, null, 2));

  if (!session) {
    return (
      <p>You must be signed in to view, the protected content on this page.</p>
    );
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
    return <p>User not found.</p>;
  }

  return (
    <div className="min-h-[calc(100vh-10rem)] h-full my-5 container mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-brand-font-color">My Profile</h1>

        <div className="flex items-center p-4 border rounded-md shadow-sm justify-between w-[500px]">
          <article className="flex items-center">
            <div className="w-16 h-16 mr-1 overflow-hidden rounded-full">
              <Image
                src={session.user.image!}
                alt={session.user.name!}
                width={64}
                height={64}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-font-color">
                {session.user.name}
              </h2>
              <p className="text-gray-500">{session.user.email}</p>
            </div>
          </article>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <PersonalDetails profile={user} />
        <AddressBook />
        <DangerZone />
      </div>
    </div>
  );
};

export default ProfilePage;
