/*
  Warnings:

  - A unique constraint covering the columns `[ogLink]` on the table `Url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Url_ogLink_key" ON "Url"("ogLink");
