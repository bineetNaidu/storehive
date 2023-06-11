import type { GetReviewsByProductIdResponse } from '@/app/api/products/[product_id]/reviews/route';
import Image from 'next/image';
import { FC } from 'react';
import { ReviewForm } from './ReviewForm';
import { ReviewCtx } from './ReviewCtx';

type Props = {
  product_id: string;
};

const fetchReviews = async (product_id: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${product_id}/reviews?limit=20`,
    {
      next: {
        revalidate: 2,
      },
    }
  );
  const data: GetReviewsByProductIdResponse = await res.json();
  return data.result;
};

export const ProductReviews: FC<Props> = async ({ product_id }) => {
  const reviews = await fetchReviews(product_id);

  return (
    <div className="p-4 text-brand-font-color">
      <ReviewForm product_id={product_id} />
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews.length === 0 && (
        <p className="text-sm font-normal text-gray-500 mb-1 italic ml-2">
          No reviews yet
        </p>
      )}
      {reviews.map((review) => (
        <div className="flex items-center mb-4" key={review.id}>
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={review.user.image || '/images/default-avatar.png'}
              alt={review.user.name || 'User'}
              width={48}
              height={48}
            />
          </div>
          <div className="flex flex-col mr-2">
            <p className="text-sm font-bold">{review.user.name || 'User'}</p>
            <div className="rating rating-sm">
              <input
                type="radio"
                readOnly
                className="mask mask-star-2 bg-brand-secondary"
                checked={review.rating === 1}
              />
              <input
                type="radio"
                readOnly
                className="mask mask-star-2 bg-brand-secondary"
                checked={review.rating === 2}
              />
              <input
                type="radio"
                readOnly
                className="mask mask-star-2 bg-brand-secondary"
                checked={review.rating === 3}
              />
              <input
                type="radio"
                readOnly
                className="mask mask-star-2 bg-brand-secondary"
                checked={review.rating === 4}
              />
              <input
                type="radio"
                readOnly
                className="mask mask-star-2 bg-brand-secondary"
                checked={review.rating === 5}
              />
            </div>
            <p className="text-sm font-normal text-gray-500 mb-1 italic">
              {review.comment}
            </p>
          </div>
          <ReviewCtx
            createdUserId={review.userId}
            productId={product_id}
            reviewId={review.id}
          />
        </div>
      ))}
    </div>
  );
};
