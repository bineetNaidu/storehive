'use client';

import Image from 'next/image';
import { FC, useCallback, useState } from 'react';
import { Button } from '@/components/Button';
import { FaTrash } from 'react-icons/fa';
import type { Review } from '@prisma/client';
import { DeleteReviewResponse } from '@/app/api/products/[product_id]/reviews/[review_id]/route';
import { toast } from 'react-toastify';

interface Props {
  review: Review & {
    product: {
      id: number;
      name: string;
      image: string;
    };
  };
}

export const ReviewCard: FC<Props> = ({ review }) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteReview = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/products/${review.productId}/reviews/${review.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data: DeleteReviewResponse = await res.json();
      if (data.error) {
        throw new Error(data.error);
      } else {
        toast.success(`Review Deleted! id: ${data.result!.deleted_id}`);
      }
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [review.id, review.productId]);

  return (
    <div className="flex hover:bg-gray-100 p-4 items-center space-x-10 transition-all duration-400 ease-in-out">
      <Image
        src={review.product.image}
        alt={review.product.name}
        width={50}
        height={50}
        className="rounded-md"
      />
      <h1 className="text-lg font-bold text-brand-font-color">
        {review.product.name}
      </h1>

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
          className="mask mask-star-2 bg-brand-secondary"
          readOnly
          checked={review.rating === 5}
        />
      </div>

      <q className="text-gray-700 font-medium italic">{review.comment}</q>

      <Button size="md" onClick={handleDeleteReview} isLoading={loading}>
        <FaTrash size={16} className="text-white inline-block mr-2" />
        Delete this review
      </Button>
    </div>
  );
};
