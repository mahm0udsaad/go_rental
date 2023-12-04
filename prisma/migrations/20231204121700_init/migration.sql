-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT,
    "plateNumber" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "meter" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Available',
    "rentalCount" INTEGER DEFAULT 0,
    "transmission" TEXT,
    "manufactureYear" INTEGER,
    "color" TEXT,
    "extraHourPrice" INTEGER NOT NULL,
    "dailyRent" INTEGER NOT NULL,
    "weeklyRent" INTEGER NOT NULL,
    "monthlyRent" INTEGER NOT NULL,
    "insuranceCompany" TEXT,
    "registrationType" TEXT,
    "fuelType" TEXT NOT NULL,
    "extraKilometerPrice" INTEGER NOT NULL,
    "vehicleType" TEXT,
    "dailyKilometerLimit" INTEGER NOT NULL,
    CONSTRAINT "Vehicle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "idNumber" TEXT NOT NULL,
    "idExpirationDate" TEXT,
    "mobile" TEXT,
    "debt" INTEGER NOT NULL,
    CONSTRAINT "Customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "paid" INTEGER NOT NULL,
    "remainingDues" INTEGER NOT NULL,
    "meterReadingOut" INTEGER NOT NULL,
    "meterReadingIn" INTEGER,
    "timeOut" TEXT NOT NULL,
    "timeIn" TEXT NOT NULL,
    "dateOut" TEXT NOT NULL,
    "returnedDate" TEXT NOT NULL,
    "invoiceDetails" TEXT,
    "customerId" INTEGER NOT NULL,
    CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contract_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contract_plateNumber_fkey" FOREIGN KEY ("plateNumber") REFERENCES "Vehicle" ("plateNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_plateNumber_key" ON "Vehicle"("plateNumber");
