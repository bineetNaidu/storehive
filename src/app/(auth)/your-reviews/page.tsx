import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { ReviewCard } from './ReviewCard';

const MyReviewsPage = async () => {
  const session = await getServerSession();

  if (!session) {
    return <div>loading...</div>;
  }

  const reviews = await prisma.review.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      product: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  return (
    <div className="min-h-[calc(100vh-10rem)] h-full my-5 container mx-auto">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-brand-font-color">My Reviews</h1>
        <div className="flex flex-col space-y-4 w-full">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}

          {reviews.length === 0 && (
            <div className="flex flex-col space-y-2">
              <h1 className="text-lg font-bold text-brand-font-color">
                No reviews yet
              </h1>
              <p className="text-gray-700 font-medium">
                You have not written any reviews yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviewsPage;
