import type { GetDealsResponse } from '@/app/api/products/deals/route';
import { ProductCard } from '@/components/ProductCard';

const fetchDeals = async () => {
  const response = await fetch(
    'http://localhost:3000/api/products/deals?limit=50',
    {
      next: { revalidate: 60 },
    }
  );
  const data: GetDealsResponse = await response.json();

  return data;
};

export default async function DealsPage() {
  const { result: deals, count } = await fetchDeals();

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        Top Deals ({count})
      </h1>

      <div className="mt-6 columns-3 gap-2">
        {deals.map((deal) => (
          <div key={deal.id} className="overflow-auto py-10">
            <ProductCard
              categories={deal.categories}
              name={deal.name}
              price={deal.price}
              image={deal.image}
              description={deal.description}
              id={deal.id}
              isNew={
                new Date(deal.createdAt).getTime() >
                Date.now() - 1000 * 60 * 60 * 24 * 7
              }
            />
          </div>
        ))}
      </div>
    </main>
  );
}
