/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - You are about to drop the column `is_admin` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "deleted_at" TIMESTAMP(3),
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "is_admin",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
