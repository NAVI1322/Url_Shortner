/*
  Warnings:

  - You are about to drop the column `qrCode` on the `Url` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Url" DROP COLUMN "qrCode",
ALTER COLUMN "clickCount" SET DEFAULT 0;
