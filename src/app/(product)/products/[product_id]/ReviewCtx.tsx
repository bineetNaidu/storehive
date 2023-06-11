'use client';

import type { DeleteReviewResponse } from '@/app/api/products/[product_id]/reviews/[review_id]/route';
import { Button } from '@/components/Button';
import { useSession } from 'next-auth/react';
import { FC, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

type Props = {
  reviewId: number;
  createdUserId: string;
  productId: string;
};

export const ReviewCtx: FC<Props> = ({
  productId,
  reviewId,
  createdUserId,
}) => {
  const [loading, setLoading] = useState(false);
  const session = useSession();

  if (session.status === 'unauthenticated') return null;

  if (session.data?.user.id !== createdUserId) return null;

  const handleDeleteReview = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/products/${productId}/reviews/${reviewId}`,
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
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        size="sm"
        varient="outlined"
        onClick={handleDeleteReview}
        isLoading={loading}
      >
        <FaTrash />
      </Button>
    </div>
  );
};
