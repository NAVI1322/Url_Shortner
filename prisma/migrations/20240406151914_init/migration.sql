-- CreateTable
CREATE TABLE "Url" (
    "id" SERIAL NOT NULL,
    "shortLink" VARCHAR(40) NOT NULL,
    "ogLink" VARCHAR(255) NOT NULL,
    "qrCode" BYTEA NOT NULL,
    "clickCount" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
