import { ProductCard } from '@/components/ProductCard';
import { prismaClient } from '@/lib/prisma';
import type { Category, Product } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next';

type PageProps = {
  category:
    | (Category & {
        product: Product[];
      })
    | null;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx
) => {
  const { category } = ctx.query;

  const name = category as string;

  const categoryDbData = await prismaClient.category.findUnique({
    where: {
      name,
    },
    include: {
      product: true,
    },
  });

  return {
    props: {
      category: JSON.parse(JSON.stringify(categoryDbData)),
    },
  };
};

const CategoryProductPage: NextPage<PageProps> = ({ category }) => {
  if (!category) {
    return <div>Category not found</div>;
  }
  return (
    <main className="px-8 py-4">
      <h1 className="font-bold text-2xl">
        <span className="capitalize">{category.name}</span> for you!
      </h1>

      <div className="grid grid-cols-5 gap-4 py-5">
        {category.product.length > 0 ? (
          category.product.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-5 text-center py-y text-3xl italic">
            No products found ;(
          </div>
        )}
      </div>
    </main>
  );
};

export default CategoryProductPage;
