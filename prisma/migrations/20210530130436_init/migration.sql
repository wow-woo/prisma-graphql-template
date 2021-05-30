-- CreateTable
CREATE TABLE "Buffet" (
    "id" SERIAL NOT NULL,
    "appetite" TEXT NOT NULL,
    "main" TEXT NOT NULL,
    "prices" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
