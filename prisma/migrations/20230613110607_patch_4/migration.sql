/*
  Warnings:

  - You are about to drop the column `name` on the `variations` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hex,variation_id]` on the table `options` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[size,variation_id]` on the table `options` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[type,product_id]` on the table `variations` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `options` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "VariationType" AS ENUM ('COLOR', 'SIZE');

-- DropIndex
DROP INDEX "options_name_variation_id_key";

-- DropIndex
DROP INDEX "variations_name_product_id_key";

-- AlterTable
ALTER TABLE "options" ADD COLUMN     "hex" TEXT,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "variations" DROP COLUMN "name",
ADD COLUMN     "type" "VariationType" NOT NULL DEFAULT 'COLOR';

-- CreateIndex
CREATE UNIQUE INDEX "options_hex_variation_id_key" ON "options"("hex", "variation_id");

-- CreateIndex
CREATE UNIQUE INDEX "options_size_variation_id_key" ON "options"("size", "variation_id");

-- CreateIndex
CREATE UNIQUE INDEX "variations_type_product_id_key" ON "variations"("type", "product_id");
