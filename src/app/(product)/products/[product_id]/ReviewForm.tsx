'use client';

import { CreateReviewByProductIdResponse } from '@/app/api/products/[product_id]/reviews/route';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { useSession } from 'next-auth/react';
import { FC, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

export const ReviewForm: FC<{ product_id: string }> = ({ product_id }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    rating: '',
    comment: '',
  });

  const session = useSession();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      if (rating === 0) {
        toast.error('Please select a rating');
        setError((e) => ({ ...e, rating: 'Please select a rating' }));
      }

      if (comment.trim() === '') {
        toast.error('Please write a comment');
        setError((e) => ({ ...e, comment: 'Please write a comment' }));
      }

      const res = await fetch(`/api/products/${product_id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, comment }),
      });
      const data: CreateReviewByProductIdResponse = await res.json();

      if (!data.error) {
        toast.success('Review submitted successfully');
        setRating(1);
        setComment('');

        setError({
          rating: '',
          comment: '',
        });
        setIsLoading(false);
      } else {
        toast.error('Something went wrong while submitting the review');
      }

      setIsLoading(false);
    },
    [rating, comment, product_id]
  );

  if (!session) {
    return null;
  }

  return (
    <form
      className="flex flex-col border rounded-xl p-4 mb-4 w-full max-w-sm"
      onSubmit={handleSubmit}
    >
      <h1 className="text-lg font-bold mb-2 text-gray-800">
        Write your Review about the product
      </h1>

      <div className="mb-2">
        <div className="rating">
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-400"
            onChange={() => setRating(1)}
            checked={rating === 1}
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-400"
            onChange={() => setRating(2)}
            checked={rating === 2}
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-400"
            onChange={() => setRating(3)}
            checked={rating === 3}
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            onChange={() => setRating(4)}
            checked={rating === 4}
          />
          <input
            type="radio"
            className="mask mask-star-2 bg-orange-400"
            onChange={() => setRating(5)}
            checked={rating === 5}
          />
        </div>

        {error.rating && <p className="text-red-500 text-sm">{error.rating}</p>}
      </div>

      <InputField
        type="text"
        placeholder="Write your comment"
        className="mb-2 w-full"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        message={error.comment}
      />

      <Button type="submit" className="w-full max-w-sm" isLoading={isLoading}>
        Submit your Review!
      </Button>
    </form>
  );
};
