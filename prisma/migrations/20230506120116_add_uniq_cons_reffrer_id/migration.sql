/*
  Warnings:

  - A unique constraint covering the columns `[referrer_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_referrer_id_key" ON "User"("referrer_id");
