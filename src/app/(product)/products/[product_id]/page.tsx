import { NextPage } from 'next';
import Image from 'next/image';
import { ProductCtx } from './ProductCtx';
import type { GetProductByIdResponse } from '@/app/api/products/[product_id]/route';
import { ProductReviews } from './ProductReviews';
import Link from 'next/link';

type NextPageProps = {
  params: {
    product_id: string;
  };
};

const fetchProduct = async (product_id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${product_id}`, {
    next: {
      revalidate: 10,
    },
  });
  const data: GetProductByIdResponse = await res.json();
  return data.result;
};

const ProductPage: NextPage<NextPageProps> = async ({
  params: { product_id },
}) => {
  const product = await fetchProduct(product_id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="container">
      <div className="text-sm breadcrumbs px-4">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a>category</a>
          </li>
          {product.categories.map((category) => (
            <li key={category.id} className="text-brand-font-color">
              <Link href={`/categories/${category.id}`} prefetch={false}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4 p-4 flex flex-col">
        <article className="flex flex-col items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-[500px] w-[500px]"
            priority
          />
        </article>
        <article className="text-brand-font-color pt-10 md:pt-0">
          <div className="px-10 md:px-0">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mb-4">
              {product.categories.map((category) => (
                <span
                  key={category.id}
                  className="badge badge-outline badge-sm mr-2"
                >
                  {category.name}
                </span>
              ))}
            </div>
            <p className="text-sm font-normal text-gray-600 mb-1">
              {product.description}
            </p>

            <div className="flex items-center">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  readOnly
                  className="mask mask-star-2 bg-brand-secondary"
                  checked
                />
                <input
                  type="radio"
                  readOnly
                  className="mask mask-star-2 bg-brand-secondary"
                />
                <input
                  type="radio"
                  readOnly
                  className="mask mask-star-2 bg-brand-secondary"
                />
                <input
                  type="radio"
                  readOnly
                  className="mask mask-star-2 bg-brand-secondary"
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-brand-secondary"
                  readOnly
                />
              </div>
              <span className="text-sm font-normal text-gray-600 ml-2">
                ({product._count.reviews})
              </span>
            </div>
          </div>

          <div className="my-12 px-10 md:px-0">
            <p className="text-3xl font-bold mb-1">
              ${product.price} or 99.99/month
            </p>
            <p className="text-sm text-gray-600">
              suggested payment with 6 months special financing
            </p>
          </div>

          <ProductCtx product={product} />

          <div className="my-12 px-10 md:px-0">
            <div className="w-96 border border-gray-200 rounded-md p-4">
              <h2 className="text-brand-font-color text-md font-medium mb-1">
                Free delivery!
              </h2>
              <p className="underline text-sm text-gray-600 font-light cursor-pointer">
                Enter you Postal code for Delivery availibility?
              </p>
            </div>

            <div className="w-96 border border-gray-200 rounded-md p-4 mt-1">
              <h2 className="text-brand-font-color text-md font-medium mb-1">
                Return Policy!
              </h2>
              <p className="text-sm text-gray-600 font-light">
                Free 30 days return policy.{' '}
                <span className="underline cursor-pointer">details</span>
              </p>
            </div>
          </div>

          {product.metadata && (
            <div className="my-12 px-10 md:px-0">
              <h2 className="text-brand-font-color text-md font-medium mb-1">
                Product Details
              </h2>
              <div className="gap-6 columns-2">
                {Object.entries(product.metadata).map(([key, value]) => (
                  <div
                    tabIndex={0}
                    className="collapse bg-white rounded-md my-2 text-brand-font-color collapse-plus"
                    key={`${key}-${value}`}
                  >
                    <div className="collapse-title text-xl font-medium">
                      {key}
                    </div>
                    <div className="collapse-content">
                      <p>
                        {Array.isArray(value)
                          ? value.map((v) => (
                              <span
                                className="badge badge-outline mx-1"
                                key={v}
                              >
                                {v}
                              </span>
                            ))
                          : value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <ProductReviews product_id={product_id} />
        </article>
      </div>
    </main>
  );
};

export default ProductPage;
