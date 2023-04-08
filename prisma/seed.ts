import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient();

export async function seed() {
  const categories_data = ['Electronics', 'Books', 'Fashion', 'Furniture'];

  for (let index = 0; index < categories_data.length; index++) {
    const element = categories_data[index];
    await prismaClient.category.create({
      data: {
        name: element,
      },
    });
    console.log(`-> Created category: ${element}`);
  }

  const products_data = [
    {
      name: 'iPhone 12',
      description:
        'The iPhone 12 is a smartphone designed, developed, and marketed by Apple Inc. as part of the iPhone series. It is the twelfth generation of the iPhone, succeeding the iPhone 11. The iPhone 12 lineup was announced on October 13, 2020, during a virtual event, and was released on October 23, 2020, succeeding the iPhone 11 lineup.',
      imageUrl:
        'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      price: 799,
      brand: 'Apple',
      category: {
        connect: {
          name: 'Electronics',
        },
      },
    },
    {
      name: 'iPhone 12 Pro',
      description:
        'The iPhone 12 Pro is a smartphone designed, developed, and marketed by Apple Inc. as part of the iPhone series. It is the twelfth generation of the iPhone, succeeding the iPhone 11. The iPhone 12 Pro lineup was announced on October 13, 2020, during a virtual event, and was released on October 23, 2020, succeeding the iPhone 11 lineup.',
      price: 999,
      brand: 'Apple',
      imageUrl:
        'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      category: {
        connect: {
          name: 'Electronics',
        },
      },
    },
    {
      name: 'Pride and Prejudice',
      description:
        'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The story charts the emotional development of the protagonist, Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. The comedy of the writing lies in the depiction of manners, education, marriage, and money in the British Regency.',
      price: 9.99,
      brand: 'Jane Austen',
      imageUrl:
        'https://images.unsplash.com/photo-1603162610423-af7febeca563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJpZGUlMjBhbmQlMjBwcmVqdWRpY2UlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      category: {
        connect: {
          name: 'Books',
        },
      },
    },
    {
      name: 'The Great Gatsby',
      brand: 'F. Scott Fitzgerald',
      imageUrl:
        'https://images.unsplash.com/photo-1615413833480-6e8427dbcc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwZ3JlYXQlMjBnYXRzYnklMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description:
        'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession for the beautiful former debutante Daisy Buchanan.',
      price: 9.99,
      category: {
        connect: {
          name: 'Books',
        },
      },
    },
    {
      name: 'Loose T-Shirt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 29.99,
      brand: 'H&M',
      imageUrl:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9zc2UlMjBmaXQlMjB0JTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      category: {
        connect: {
          name: 'Fashion',
        },
      },
    },
    {
      name: 'Slim Fit T-Shirt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 29.99,
      brand: 'H&M',
      imageUrl:
        'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      category: {
        connect: {
          name: 'Fashion',
        },
      },
    },
  ];

  for (let index = 0; index < products_data.length; index++) {
    const element = products_data[index];
    await prismaClient.product.create({
      data: element,
    });
    console.log(`-> Created product: ${element.name}`);
  }
}

seed()
  .then(async () => {
    await prismaClient.$disconnect();
    console.log('-> Done seeding');
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
  });
