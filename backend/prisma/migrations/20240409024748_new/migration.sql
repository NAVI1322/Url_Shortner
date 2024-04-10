/*
  Warnings:

  - A unique constraint covering the columns `[shortLink]` on the table `Url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Url_shortLink_key" ON "Url"("shortLink");
