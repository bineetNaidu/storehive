import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categoriesData = [
  {
    name: 'Electronics',
    products: [
      {
        name: 'iPhone 12',
        description:
          'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc. as part of the iPhone series. It is the twelfth generation of the iPhone, succeeding the iPhone 11. The iPhone 12 lineup was announced on October 13, 2020, during a virtual event, and was released on October 23, 2020, succeeding the iPhone 11 lineup.',
        image:
          'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        price: 799,
      },
      {
        name: 'Apple Watch',
        price: 100,
        image:
          'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      },
      {
        name: 'Macbook Pro',
        price: 1300,
        image:
          'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      },
      {
        name: 'Amazon Echo',
        price: 100,
        image:
          'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      },
    ],
  },
  {
    name: 'Clothing',
    products: [
      {
        name: 'T-Shirt',
        description: 'A comfortable and stylish t-shirt.',
        price: 19.99,
        image:
          'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Jeans',
        description: 'Classic denim jeans for everyday wear.',
        price: 49.99,
        image:
          'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Nike Shoe',
        price: 200,
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      },
      {
        name: 'Loose T-Shirt',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9zc2UlMjBmaXQlMjB0JTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Slim Fit T-Shirt',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  {
    name: 'Home & Kitchen',
    products: [
      {
        name: 'Coffee Maker',
        description: 'A programmable coffee maker for your morning brew.',
        price: 59.99,
        image:
          'https://images.unsplash.com/photo-1608354580875-30bd4168b351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmUlMjBtYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Blender',
        description: 'A powerful blender for smoothies and food preparation.',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1593421970636-570fcb157915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsZW5kZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  {
    name: 'Books',
    products: [
      {
        name: 'Pride and Prejudice',
        description:
          'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The story charts the emotional development of the protagonist, Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. The comedy of the writing lies in the depiction of manners, education, marriage, and money in the British Regency.',
        price: 9.99,
        image:
          'https://images.unsplash.com/photo-1603162610423-af7febeca563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJpZGUlMjBhbmQlMjBwcmVqdWRpY2UlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'The Great Gatsby',
        image:
          'https://images.unsplash.com/photo-1615413833480-6e8427dbcc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwZ3JlYXQlMjBnYXRzYnklMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession for the beautiful former debutante Daisy Buchanan.',
        price: 9.99,
      },
    ],
  },
  {
    name: 'Beauty',
    products: [
      {
        name: 'Skincare Set',
        description: 'A complete skincare set for a radiant complexion.',
        price: 49.99,
        image:
          'https://images.unsplash.com/photo-1591130901921-3f0652bb3915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2tpbmNhcmUlMjBTZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Makeup Palette',
        description: 'A versatile makeup palette for various looks.',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1625093525885-282384697917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFrZXVwJTIwUGFsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  {
    name: 'Sports & Outdoors',
    products: [
      {
        name: 'Yoga Mat',
        description: 'A comfortable and non-slip yoga mat for practice.',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1624651208388-f8726eace8f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Camping Tent',
        description: 'A spacious tent for outdoor camping adventures.',
        price: 99.99,
        image:
          'https://images.unsplash.com/photo-1605204780077-378f7e101d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZyUyMHRlbnQlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  {
    name: 'Toys & Games',
    products: [
      {
        name: 'Board Game',
        description: 'An engaging board game for friends and family.',
        price: 24.99,
        image:
          'https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Building Blocks',
        description: 'Colorful building blocks for creative playtime.',
        price: 14.99,
        image:
          'https://images.unsplash.com/photo-1558907353-ceb54f3882ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmclMjBibG9ja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },

  {
    name: 'Health & Personal Care',
    products: [
      {
        name: 'Electric Toothbrush',
        description: 'An electric toothbrush for effective oral hygiene.',
        price: 49.99,
        image:
          'https://images.unsplash.com/photo-1593010997571-7ebe6c593d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlY3RyaWMlMjBUb290aGJydXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Fitness Tracker',
        description: 'A stylish fitness tracker to monitor your activity.',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  {
    name: 'Grocery & Gourmet Food',
    products: [
      {
        name: 'Chocolate - Pistoles, White',
        price: 78.12,
        description: 'Release Prostate, Via Natural or Artificial Opening',
        image:
          'https://images.unsplash.com/photo-1565071559227-20ab25b7685e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Cookie Choc',
        price: 51.46,
        description:
          'Therapeutic Exercise Treatment of Genitourinary System using Electrotherapeutic Equipment',
        image:
          'https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29va2llJTIwQ2hvY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Extract - Rum',
        price: 3.74,
        description:
          'Extirpation of Matter from Intracranial Artery, Bifurcation, Percutaneous Endoscopic Approach',
        image:
          'https://images.unsplash.com/photo-1542196824997-41821a746247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RXh0cmFjdCUyMCUyMCUyMFJ1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Sauce - Oyster',
        price: 29.6,
        description: 'Drainage of Vagina, Open Approach',
        image:
          'https://images.unsplash.com/photo-1519420638722-a2a5749c32be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2F1Y2UlMjAlMjAlMjBPeXN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  { name: 'Office Products', products: [] },
  { name: 'Jewelry', products: [] },
  { name: 'Musical Instruments', products: [] },
  { name: 'Industrial & Scientific', products: [] },
  { name: 'Software', products: [] },
  { name: 'Arts, Crafts & Sewing', products: [] },
  { name: 'Movies & TV Shows', products: [] },
  { name: 'Tools & Home Improvement', products: [] },
  { name: 'Pet Supplies', products: [] },
  { name: 'Baby', products: [] },
  { name: 'Automotive', products: [] },
];

async function seed() {
  for (const categoryData of categoriesData) {
    const c = await prisma.category.create({
      data: {
        name: categoryData.name,
      },
    });

    console.log(`>> Created category with id: ${c.id}`);

    for (const productData of categoryData.products) {
      const p = await prisma.product.create({
        data: {
          ...productData,
          categories: {
            connect: {
              id: c.id,
            },
          },
        },
      });

      console.log(`>> Created product with id: ${p.id}`);
    }
  }
}

seed()
  .then(() => {
    console.log('Categories seeded successfully!');
  })
  .catch((error) => {
    console.error('Error seeding categories:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
