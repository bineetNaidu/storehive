-- DropForeignKey
ALTER TABLE "ProductReview" DROP CONSTRAINT "ProductReview_author_id_fkey";

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("referrer_id") ON DELETE RESTRICT ON UPDATE CASCADE;
