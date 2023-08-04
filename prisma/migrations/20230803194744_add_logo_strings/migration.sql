/*
  Warnings:

  - Added the required column `logoDark` to the `Employment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logoLight` to the `Employment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employment" ADD COLUMN     "logoDark" TEXT NOT NULL,
ADD COLUMN     "logoLight" TEXT NOT NULL;
