/*
  Warnings:

  - The required column `recipeID` was added to the `Recipe` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Recipe_author_key";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "recipeID" TEXT NOT NULL,
ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY ("recipeID");
