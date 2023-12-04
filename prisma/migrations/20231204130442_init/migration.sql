/*
  Warnings:

  - A unique constraint covering the columns `[plateNumber]` on the table `Contract` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contract_plateNumber_key" ON "Contract"("plateNumber");
