import { Button } from '@/components/Button';
import { ProductCard } from '@/components/ProductCard';
import { mockProducts } from '@/utils/mockData';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div
        className="hero h-[500px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:max-w-xl">
            <h1 className="mb-5  text-3xl md:text-5xl font-bold">
              Hive into a world of endless shopping possibilities
            </h1>
            <Button size="lg">Get Started</Button>
          </div>
        </div>
      </div>

      <div></div>

      <div>
        <div className="divider m-10">
          <h1 className="text-2xl font-bold">Top Deals</h1>
        </div>
        <div className="flex flex-col items-center  md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {mockProducts.map((product) => (
            <div key={product.id} className="mx-auto">
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                isNew
                categories={product.categories}
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
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCard
              id={index}
              key={index}
              name="Shoes!"
              description="If a dog chews shoes whose shoes does he choose?"
              imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              isNew
              categories={['Fashion', 'Products']}
            />
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
            src="https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Hive"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
