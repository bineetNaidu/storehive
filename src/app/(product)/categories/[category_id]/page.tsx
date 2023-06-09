import { ProductCard } from '@/components/ProductCard';
import type { Category, Product } from '@prisma/client';
import { NextPage } from 'next';

type Result = {
  result:
    | (Category & {
        products: (Product & {
          categories: {
            id: number;
            name: string;
          }[];
        })[];
      })
    | null;
};

const fetchCategory = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/categories/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return null;
  }

  const data: Result = await res.json();

  return data.result;
};

const CategoryPage: NextPage<{
  params: {
    category_id: string;
  };
}> = async ({ params: { category_id } }) => {
  const category = await fetchCategory(category_id);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <main className="px-8 py-4">
      <h1 className="font-bold text-2xl">
        <span className="capitalize">{category.name}</span> for you!
      </h1>

      <div className="grid grid-cols-4 gap-4 py-5">
        {category.products.length > 0 ? (
          category.products.map((product) => (
            <div key={product.id}>
              <ProductCard
                createdAt={product.createdAt}
                price={product.price}
                updatedAt={product.updatedAt}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                isNew={
                  product.createdAt >
                  new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)
                } // created in the last 7 days
                categories={product.categories!}
              />
            </div>
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

export default CategoryPage;
