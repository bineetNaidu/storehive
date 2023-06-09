import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { getTopDeals, getTopProducts } from '@/lib/queries';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const topDeals = await getTopDeals({ includeCategories: true });
  const topProducts = await getTopProducts({ includeCategories: true });

  return (
    <main>
      <div
        className="hero h-[500px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/storehive-hero-banner.jpeg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:max-w-xl">
            <h1 className="mb-5  text-3xl md:text-5xl font-bold">
              Hive into a world of endless shopping possibilities
            </h1>
            <Link href="/register">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>

      <div></div>

      <div>
        <div className="divider m-10">
          <h1 className="text-2xl font-bold">Top Deals</h1>
        </div>
        <div className="flex flex-col items-center  md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {topDeals.map((product) => (
            <div key={product.id} className="mx-auto">
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
          ))}
        </div>
      </div>

      <div>
        <div className="divider m-10">
          <h1 className="text-2xl font-bold">Top products</h1>
        </div>
        <div className="flex flex-col items-center  md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {topProducts.map((product) => (
            <div key={product.id} className="mx-auto">
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
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 m-10">
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold">What is Hive?</h2>
          <p className="mt-4 text-lg">
            Hive is a platform that allows you to shop from your favorite stores
            around the world. We have a wide range of products from different
            categories. We also have a wide range of payment options to make
            shopping easier for you.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/storehive-hero-banner.jpeg"
            alt="Hive"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
