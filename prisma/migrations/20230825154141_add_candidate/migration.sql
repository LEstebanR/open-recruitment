/*
  Warnings:

  - You are about to drop the column `initials` on the `Candidate` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email,companyId]` on the table `Candidate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Candidate" DROP CONSTRAINT "Candidate_referrerId_fkey";

-- DropIndex
DROP INDEX "Candidate_email_key";

-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "initials",
ADD COLUMN     "companyId" TEXT NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "mainLanguage" SET DEFAULT 'en',
ALTER COLUMN "coverLetter" DROP NOT NULL,
ALTER COLUMN "referrerId" DROP NOT NULL,
ALTER COLUMN "educationLevel" DROP NOT NULL,
ALTER COLUMN "salaryExpectation" DROP NOT NULL,
ALTER COLUMN "isHired" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_email_companyId_key" ON "Candidate"("email", "companyId");

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "TagSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidate" ADD CONSTRAINT "Candidate_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
