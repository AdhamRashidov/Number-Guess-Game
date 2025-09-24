/*
  Warnings:

  - Added the required column `result` to the `Guess` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Guess` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Guess" ADD COLUMN     "result" TEXT NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL;
