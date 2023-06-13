import { PrismaClient, Size } from '@prisma/client';

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
        metadata: {
          brand: 'Apple',
          weight: 0.5,
          condition: 'new',
          origin: 'USA',
          warranty: '1 year',
          storageCapacity: '128GB',
          batteryLife: '24 hours',
          tags: ['electronics', 'phone', 'apple', 'iphone'],
        },
        stockCount: 46,
        isFeatured: true,
        variations: [
          {
            name: 'color',
            options: [
              {
                name: 'black',
                size: undefined,
              },
              {
                name: 'white',
                size: undefined,
              },
            ],
          },
        ],
      },
      {
        name: 'Apple Watch',
        price: 100,
        image:
          'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        stockCount: 100,
        isFeatured: true,
        metadata: {
          brand: 'Apple',
          weight: 0.5,
          condition: 'new',
          origin: 'USA',
          warranty: '1 year',
          tags: ['electronics', 'watch', 'apple', 'apple watch'],
          batteryLife: '24 hours',
          compatibility: 'iOS',
          voiceAssistant: 'Siri',
          storageCapacity: '32GB',
        },
        variations: [
          {
            name: 'color',
            options: [
              {
                name: 'red',
                size: undefined,
              },
              {
                name: 'green',
                size: undefined,
              },
            ],
          },
        ],
      },
      {
        name: 'Macbook Pro',
        price: 1300,
        image:
          'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        stockCount: 100,
        isFeatured: true,
        metadata: {
          brand: 'Apple',
          weight: 2.5,
          condition: 'new',
          origin: 'USA',
          warranty: '1 year',
          tags: ['electronics', 'laptop', 'apple', 'macbook'],
          storageCapacity: '512GB',
          batteryLife: '10 hours',
          processor: 'Intel Core i5',
          ram: '8GB',
          graphics: 'Intel Iris Plus Graphics 645',
          ports: '4x Thunderbolt 3',
          compatibility: 'macOS',
        },
        variations: [
          {
            name: 'color',
            options: [
              {
                name: 'black',
                size: undefined,
              },
              {
                name: 'gray',
                size: undefined,
              },
            ],
          },
        ],
      },
      {
        name: 'Amazon Echo',
        price: 100,
        image:
          'https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Amazon',
          weight: 0.8,
          condition: 'new',
          origin: 'USA',
          warranty: '1 year',
          speaker: '2x 10W',
          voiceAssistant: 'Alexa',
          compatibility: 'iOS, Android',
          tags: ['electronics', 'speaker', 'amazon', 'echo'],
          batteryLife: '24 hours',
        },
        variations: [
          {
            name: 'color',
            options: [
              {
                name: 'black',
                size: undefined,
              },
              {
                name: 'white',
                size: undefined,
              },
            ],
          },
        ],
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
        metadata: {
          brand: 'Nike',
          material: 'cotton',
          careInstructions: 'Machine wash cold',
          tags: ['clothing', 'shirt', 't-shirt', 'nike'],
        },
        stockCount: 500,
        isFeatured: false,
        variations: [
          {
            name: 'color',
            options: [
              {
                name: 'black',
                size: undefined,
              },
              {
                name: 'purple',
                size: undefined,
              },
            ],
          },
          {
            name: 'size',
            options: [
              {
                size: 'S',
                name: undefined,
              },
              {
                size: 'M',
                name: undefined,
              },
              {
                size: 'L',
                name: undefined,
              },
              {
                size: 'XL',
                name: undefined,
              },
            ],
          },
        ],
      },

      {
        name: 'Jeans',
        description: 'Classic denim jeans for everyday wear.',
        price: 49.99,
        image:
          'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        metadata: {
          brand: 'Levi',
          material: 'denim',
          careInstructions: 'Machine wash cold',
          tags: ['clothing', 'jeans', 'levi'],
        },
        stockCount: 200,
        isFeatured: true,
        variations: [
          {
            name: 'color',
            options: [
              {
                name: 'blue',
                size: undefined,
              },
            ],
          },
          {
            name: 'size',
            options: [
              {
                size: 'S',
                name: undefined,
              },
              {
                size: 'M',
                name: undefined,
              },
              {
                size: 'L',
                name: undefined,
              },
              {
                size: 'XL',
                name: undefined,
              },
            ],
          },
        ],
      },
      {
        name: 'Nike Shoe',
        price: 200,
        image:
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Nike',
          tags: ['clothing', 'casual', 'shoe', 'nike'],
        },
        variations: [
          {
            name: 'size',
            options: [
              {
                size: 'S',
                name: undefined,
              },
              {
                size: 'M',
                name: undefined,
              },
            ],
          },
        ],
      },
      {
        name: 'Loose T-Shirt',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9zc2UlMjBmaXQlMjB0JTIwc2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        metadata: {
          brand: 'Nike',
          material: 'cotton',
          careInstructions: 'Machine wash cold',
          tags: ['clothing', 'shirt', 't-shirt', 'nike'],
        },
        stockCount: 500,
        isFeatured: false,
        variations: [
          {
            name: 'color',
            options: [
              {
                name: 'yellow',
                size: undefined,
              },
            ],
          },
          {
            name: 'size',
            options: [
              {
                name: undefined,
                size: 'S',
              },
            ],
          },
        ],
      },
      {
        name: 'Slim Fit T-Shirt',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHRzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        metadata: {
          brand: 'Adidas',
          material: 'cotton',
          careInstructions: 'Machine wash cold',
          tags: ['clothing', 'shirt', 't-shirt', 'adidas'],
        },
        stockCount: 500,
        isFeatured: false,
        variations: [
          {
            name: 'size',
            options: [
              {
                name: undefined,
                size: 'S',
              },
            ],
          },
        ],
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
        stockCount: 200,
        isFeatured: true,
        metadata: {
          brand: 'Cuisinart',
          tags: ['kitchen', 'coffee', 'cuisinart'],
          usageInstructions: 'Fill with water, add coffee grounds, press start',
          weight: '8lbs',
          capacity: '6ltr',
          features: 'Programmable, 12 cup capacity',
        },
        variations: [],
      },
      {
        name: 'Blender',
        description: 'A powerful blender for smoothies and food preparation.',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1593421970636-570fcb157915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsZW5kZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Cuisinart',
          tags: ['kitchen', 'blender', 'cuisinart'],
          usageInstructions: 'Fill with ingredients, press start',
          weight: '10lbs',
          capacity: '2ltr',
          features: 'Programmable, 12 cup capacity',
        },
        variations: [],
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
        stockCount: 800,
        isFeatured: true,
        metadata: {
          author: 'Jane Austen',
          publisher: 'T. Egerton, Whitehall',
          publicationDate: '28 January 1813',
          language: 'English',
          pages: '279',
          isbn: '978-1-000-00000-0',
          tags: ['book', 'pride and prejudice', 'jane austen'],
          genre: 'Romance',
        },
        variations: [],
      },
      {
        name: 'The Great Gatsby',
        image:
          'https://images.unsplash.com/photo-1615413833480-6e8427dbcc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwZ3JlYXQlMjBnYXRzYnklMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        description:
          'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional town of West and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession for the beautiful former debutante Daisy Buchanan.',
        price: 9.99,
        inStock: 800,
        isFeatured: false,
        metadata: {
          author: 'F. Scott Fitzgerald',
          publisher: "Charles Scribner's Sons",
          publicationDate: '10 April 1925',
          language: 'English',
          pages: '218',
          isbn: '978-1-000-00000-0',
          tags: ['book', 'the great gatsby', 'f. scott fitzgerald'],
          genre: 'Romance',
        },
        variations: [],
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
        stockCount: 200,
        isFeatured: true,
        metadata: {
          brand: 'Sukin',
          'skin-type': 'Combination',
          tags: ['skincare', 'sukin', 'combination'],
          'usage-instructions': 'Apply to face and neck after cleansing',
          volume: '100ml',
          expiry: '12 months after opening',
        },
        variations: [],
      },
      {
        name: 'Makeup Palette',
        description: 'A versatile makeup palette for various looks.',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1625093525885-282384697917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFrZXVwJTIwUGFsZXR0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Makeup Revolution',
          'skin-type': 'All',
          tags: ['makeup', 'makeup revolution', 'all'],
          'usage-instructions': 'Apply to face and neck after cleansing',
          volume: '100ml',
          expiry: '12 months after opening',
        },
        variations: [],
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
        stockCount: 200,
        isFeatured: true,
        metadata: {
          brand: 'Yoga Matters',
          tags: ['yoga', 'yoga matters', 'purple'],
        },
        variations: [
          {
            name: 'color',
            options: [
              { name: 'purple', size: undefined },
              { name: 'blue', size: undefined },
              { name: 'pink', size: undefined },
            ],
          },
        ],
      },
      {
        name: 'Camping Tent',
        description: 'A spacious tent for outdoor camping adventures.',
        price: 99.99,
        image:
          'https://images.unsplash.com/photo-1605204780077-378f7e101d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FtcGluZyUyMHRlbnQlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Coleman',
          tags: ['camping', 'tent', 'coleman'],
        },
        variations: [],
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
        stockCount: 200,
        isFeatured: true,
        metadata: {
          brand: 'Board Game Co.',
          tags: ['board game', 'board game co.', 'game night'],
          'age-range': '8+',
          'number-of-players': '2-4',
          'game-time': '30 minutes',
        },
        variations: [],
      },
      {
        name: 'Building Blocks',
        description: 'Colorful building blocks for creative playtime.',
        price: 14.99,
        image:
          'https://images.unsplash.com/photo-1558907353-ceb54f3882ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmclMjBibG9ja3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Lego',
          tags: ['lego', 'building blocks', 'toys'],
          'age-range': '4+',
          'number-of-players': '1+',
          'game-time': '30 minutes',
        },
        variations: [],
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
        stockCount: 200,
        isFeatured: true,
        metadata: {
          brand: 'Oral-B',
          tags: ['oral-b', 'electric toothbrush', 'oral hygiene'],
          'safety warnings': 'Not suitable for children under 3 years.',
        },
        variations: [
          {
            name: 'color',
            options: [
              { name: 'white', size: undefined },
              { name: 'black', size: undefined },
              { name: 'pink', size: undefined },
            ],
          },
        ],
      },
      {
        name: 'Fitness Tracker',
        description: 'A stylish fitness tracker to monitor your activity.',
        price: 89.99,
        image:
          'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rml0bmVzcyUyMFRyYWNrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Fitbit',
          tags: ['fitbit', 'fitness tracker', 'fitness'],
          'age-range': '18+',
          batteryLife: '7 days',
          warranty: '1 year',
        },
        variations: [
          {
            name: 'color',
            options: [
              { name: 'black', size: undefined },
              { name: 'white', size: undefined },
              { name: 'pink', size: undefined },
            ],
          },
        ],
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
        stockCount: 200,
        isFeatured: true,
        metadata: {
          brand: 'Chocolate Co.',
          tags: ['chocolate', 'chocolate co.', 'sweets'],
          ingredients:
            'sugar, cocoa butter, whole milk powder, skimmed milk powder, emulsifier: soya lecithin, natural vanilla flavouring',
          allergens: 'milk, soya',
          storage: 'store in a cool, dry place',
          'nutrition-facts':
            'per 100g: energy 2400kJ / 575kcal, fat 37g, of which saturates 23g, carbohydrate 53g, of which sugars 53g, protein 6.9g, salt 0.21g',
          expires: '2021-12-31',
        },
        variations: [],
      },
      {
        name: 'Cookie Choc',
        price: 51.46,
        description:
          'Therapeutic Exercise Treatment of Genitourinary System using Electrotherapeutic Equipment',
        image:
          'https://images.unsplash.com/photo-1590080874088-eec64895b423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29va2llJTIwQ2hvY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Cookie Co.',
          tags: ['cookie', 'cookie co.', 'sweets'],
          ingredients:
            'wheat flour, sugar, vegetable oil, cocoa powder, glucose syrup, raising agents, salt, emulsifier, flavouring',
          allergens: 'wheat, gluten',
          storage: 'store in a cool, dry place',
          'nutrition-facts':
            'per 100g: energy 2100kJ / 500kcal, fat 24g, of which saturates 12g, carbohydrate 66g, of which sugars 35g, protein 5.5g, salt 0.7g',
          expires: '2021-12-31',
        },
        variations: [],
      },
      {
        name: 'Extract - Rum',
        price: 3.74,
        description:
          'Extirpation of Matter from Intracranial Artery, Bifurcation, Percutaneous Endoscopic Approach',
        image:
          'https://images.unsplash.com/photo-1542196824997-41821a746247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RXh0cmFjdCUyMCUyMCUyMFJ1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        stockCount: 200,
        isFeatured: false,
        metadata: {
          brand: 'Extract Co.',
          tags: ['extract', 'extract co.', 'sweets'],
          ingredients:
            'water, propylene glycol, alcohol, artificial flavour, colour',
          storage: 'store in a cool, dry place',
          alcoholVolume: '35%',
        },
        variations: [],
      },
      {
        name: 'Sauce - Oyster',
        price: 29.6,
        description: 'Drainage of Vagina, Open Approach',
        image:
          'https://images.unsplash.com/photo-1519420638722-a2a5749c32be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2F1Y2UlMjAlMjAlMjBPeXN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        stockCount: 400,
        isFeatured: true,
        metadata: {
          brand: 'Sauce Co.',
          tags: ['cookie', 'cookie co.', 'sweets'],
          ingredients:
            'wheat flour, sugar, vegetable oil, cocoa powder, glucose syrup, raising agents, salt, emulsifier, flavouring',
          allergens: 'wheat, gluten',
          storage: 'store in a cool, dry place',
          'nutrition-facts':
            'per 100g: energy 2100kJ / 500kcal, fat 24g, of which saturates 12g, carbohydrate 66g, of which sugars 35g, protein 5.5g, salt 0.7g',
          expires: '2021-12-31',
        },
        variations: [],
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

    for (const { variations, ...productData } of categoryData.products) {
      const p = await prisma.product.create({
        data: {
          name: productData.name,
          price: productData.price,
          description: productData.description,
          image: productData.image,
          stockCount: productData.stockCount || 100,
          isFeatured: productData.isFeatured,
          metadata: productData.metadata,
          categories: {
            connect: {
              id: c.id,
            },
          },
        },
      });

      if (variations.length > 0) {
        for (const variationData of variations) {
          const v = await prisma.variation.create({
            data: {
              name: variationData.name,
              options: {
                createMany: {
                  data: variationData.options.map((option) => ({
                    name: option.name,
                    size: option.size as Size,
                  })),
                },
              },
              product: {
                connect: {
                  id: p.id,
                },
              },
            },
          });

          console.log(`>> Created variation with id: ${v.id}`);
        }
      }

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
