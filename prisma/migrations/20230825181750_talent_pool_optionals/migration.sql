/*
  Warnings:

  - You are about to drop the column `title` on the `TalentPool` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `TalentPool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `TalentPool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TalentPool" DROP COLUMN "title",
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TalentPool" ADD CONSTRAINT "TalentPool_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
