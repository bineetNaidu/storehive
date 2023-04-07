import Link from 'next/link';
import { FC } from 'react';

type CategoryCardProps = {
  title: string;
  imageUrl: string;
  href: string;
};

export const CategoryCard: FC<CategoryCardProps> = ({
  imageUrl,
  title,
  href,
}) => {
  return (
    <Link href={href}>
      <div
        className="h-[200px] relative rounded-xl cursor-pointer overflow-hidden hover:opacity-80 transition duration-200 ease-in-out transform hover:scale-105"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-xl">
          <div className="flex flex-col justify-center items-center h-full">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
