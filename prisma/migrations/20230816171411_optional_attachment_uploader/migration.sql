-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_uploaderId_fkey";

-- AlterTable
ALTER TABLE "Attachment" ALTER COLUMN "uploaderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "HiringRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;
