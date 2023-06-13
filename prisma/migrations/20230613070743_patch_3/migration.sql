/*
  Warnings:

  - You are about to drop the column `brand` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `variations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "options" ADD COLUMN     "size" "Size",
ALTER COLUMN "name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "brand";

-- AlterTable
ALTER TABLE "variations" DROP COLUMN "size";
