/*
  Warnings:

  - Changed the type of `type` on the `TagSource` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TagSourceType" AS ENUM ('TAG', 'SOURCE');

-- AlterTable
ALTER TABLE "TagSource" DROP COLUMN "type",
ADD COLUMN     "type" "TagSourceType" NOT NULL;
