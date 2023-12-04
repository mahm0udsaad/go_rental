/*
  Warnings:

  - Added the required column `dailyRent` to the `Contract` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contract" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "paid" INTEGER NOT NULL,
    "remainingDues" INTEGER NOT NULL,
    "meterReadingOut" INTEGER NOT NULL,
    "meterReadingIn" INTEGER,
    "timeOut" TEXT NOT NULL,
    "dailyRent" INTEGER NOT NULL,
    "timeIn" TEXT NOT NULL,
    "dateOut" TEXT NOT NULL,
    "returnedDate" TEXT NOT NULL,
    "invoiceDetails" TEXT,
    "customerId" INTEGER NOT NULL,
    CONSTRAINT "Contract_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contract_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contract_plateNumber_fkey" FOREIGN KEY ("plateNumber") REFERENCES "Vehicle" ("plateNumber") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Contract" ("customerId", "dateOut", "id", "invoiceDetails", "meterReadingIn", "meterReadingOut", "paid", "plateNumber", "remainingDues", "returnedDate", "timeIn", "timeOut", "total", "userId") SELECT "customerId", "dateOut", "id", "invoiceDetails", "meterReadingIn", "meterReadingOut", "paid", "plateNumber", "remainingDues", "returnedDate", "timeIn", "timeOut", "total", "userId" FROM "Contract";
DROP TABLE "Contract";
ALTER TABLE "new_Contract" RENAME TO "Contract";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
