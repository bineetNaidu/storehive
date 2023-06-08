type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  currency: 'usd' | 'eur' | 'gbp' | 'inr';
  categories: string[];
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Apple Watch',
    price: 100,
    imageUrl:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    currency: 'usd',
    categories: ['electronics'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
  {
    id: 2,
    name: 'Nike Shoe',
    price: 200,
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    currency: 'usd',
    categories: ['shoes', 'fashion'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
  {
    id: 3,
    name: 'Macbook Pro',
    price: 1300,
    imageUrl:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    currency: 'usd',
    categories: ['electronics'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
  {
    id: 4,
    name: 'Amazon Echo',
    price: 100,
    imageUrl:
      'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    currency: 'usd',
    categories: ['electronics'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
  },
];
