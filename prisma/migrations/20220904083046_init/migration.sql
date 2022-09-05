-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Adress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "city" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Adress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Geolocation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lat" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "adressId" INTEGER NOT NULL,
    CONSTRAINT "Geolocation_adressId_fkey" FOREIGN KEY ("adressId") REFERENCES "Adress" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Adress_userId_key" ON "Adress"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Geolocation_adressId_key" ON "Geolocation"("adressId");
