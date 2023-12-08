-- CreateTable
CREATE TABLE "Recipe" (
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "cookTime" TEXT NOT NULL,
    "foodType" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_name_key" ON "Recipe"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_author_key" ON "Recipe"("author");
