import type { Category, Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  id: Product['id'];
  name: Product['name'];
  price: Product['price'];
  image: Product['image'];
  description: Product['description'];
  isNew?: boolean;
  categories: Category[] | Pick<Category, 'name' | 'id'>[];
};

export const ProductCard: FC<Props> = (props) => {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="card w-[350px] shadow-xl glass group cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
        <figure className="flex-1">
          <Image
            src={props.image}
            alt={props.name}
            width={500}
            height={500}
            className="h-[250px] w-full aspect-square object-cover group-hover:scale-95 transition-all duration-450 ease-in-out rounded-t-xl"
          />
        </figure>
        <div className="card-body text-brand-font-color">
          <h2 className="card-title">
            {props.name}
            {props.isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <p>
            {props.description.length > 100
              ? props.description.slice(0, 100) + '...'
              : props.description}
          </p>
          <div className="card-actions justify-between">
            <div>
              <div className="badge badge-accent">${props.price}</div>
            </div>
            <div>
              {props.categories.map((category) => (
                <div key={category.id} className="badge badge-outline">
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
