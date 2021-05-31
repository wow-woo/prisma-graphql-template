/*
  Warnings:

  - You are about to drop the column `prices` on the `Buffet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Buffet" DROP COLUMN "prices",
ADD COLUMN     "price" INTEGER;
