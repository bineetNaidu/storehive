import { Category, PrismaClient, Product, Review } from '@prisma/client';

interface IArgs {
  minPrice?: number;
  maxPrice?: number;
  limit?: number;
  includeCategories?: boolean;
  includeReviews?: boolean;
}

type Result = (Product & {
  categories?: Category[];
  reviews?: Review[];
})[];

type GetTopDeals = (args: IArgs) => Promise<Result>;

type GetTopProducts = (args: IArgs) => Promise<Result>;

export const getTopDeals: GetTopDeals = async (args) => {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    take: args.limit || 4,
    where: {
      price: {
        gte: args.minPrice || 0,
        lte: args.maxPrice || 80,
      },
    },
    include: {
      categories: args.includeCategories || false,
      reviews: args.includeReviews || false,
    },
  });
  return products;
};

export const getTopProducts: GetTopProducts = async (args) => {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany({
    take: args.limit || 4,
    where: {
      price: {
        gte: args.minPrice || 800,
        lte: args.maxPrice || 100000000,
      },
    },
    include: {
      categories: args.includeCategories || false,
      reviews: args.includeReviews || false,
    },
  });

  return products;
};
