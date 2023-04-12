import { CategoryCard } from '@/components/CategoryCard';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <main>
      <article
        className="relative h-[400px]"
        style={{
          backgroundImage: "url('hero-banner.jpeg')",
          backgroundSize: 'fit',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-4xl font-bold text-white">StoreHive</h1>
            <p className="text-lg text-white pt-2">
              Find everything you need in our buzzing hive
            </p>
            <button className="px-5 py-2 mt-5 text-white bg-orange-500 rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </article>

      <article className="px-8 py-16">
        <h2 className="text-2xl font-extrabold">Shop Our Top Categories</h2>
        <br />

        <div className="grid grid-cols-4 gap-4">
          <CategoryCard
            title="Electronics"
            imageUrl="/electronic-category.jpg"
            href="/category/electronics"
          />
          <CategoryCard
            title="Fashion"
            imageUrl="/fashion-category.jpg"
            href="/category/fashion"
          />
          <CategoryCard
            title="Book"
            imageUrl="/book-category.jpg"
            href="/category/books"
          />
          <CategoryCard
            title="Furniture"
            imageUrl="/furniture-category.jpg"
            href="/category/furniture"
          />
        </div>
      </article>
    </main>
  );
};

export default HomePage;
