/*
  Warnings:

  - You are about to drop the column `userId` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_userId_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";
