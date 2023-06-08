import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isNew?: boolean;
  categories: string[];
};

export const ProductCard: FC<Props> = (props) => {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="card w-[350px] shadow-xl glass group cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
        <figure className="flex-1">
          <Image
            src={props.imageUrl}
            alt={props.name}
            width={500}
            height={500}
            className="h-[250px] w-full object-cover group-hover:scale-95 transition-all duration-450 ease-in-out rounded-t-xl"
          />
        </figure>
        <div className="card-body text-brand-font-color">
          <h2 className="card-title">
            {props.name}
            {props.isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p>{props.description}</p>
          <div className="card-actions justify-end">
            {props.categories.map((category) => (
              <div key={category} className="badge badge-outline">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
