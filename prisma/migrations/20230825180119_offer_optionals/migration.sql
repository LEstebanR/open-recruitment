-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_autoConfirmationEmailId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_pipelineTemplateId_fkey";

-- DropForeignKey
ALTER TABLE "Offer" DROP CONSTRAINT "Offer_screeningQuestionsTemplateId_fkey";

-- AlterTable
ALTER TABLE "Offer" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "requirements" DROP NOT NULL,
ALTER COLUMN "locationCountry" DROP NOT NULL,
ALTER COLUMN "locationState" DROP NOT NULL,
ALTER COLUMN "locationCity" DROP NOT NULL,
ALTER COLUMN "locationStreet" DROP NOT NULL,
ALTER COLUMN "zipcode" DROP NOT NULL,
ALTER COLUMN "remote" SET DEFAULT false,
ALTER COLUMN "jobType" DROP NOT NULL,
ALTER COLUMN "jobCategory" DROP NOT NULL,
ALTER COLUMN "jobReqEducation" DROP NOT NULL,
ALTER COLUMN "jobReqExperience" DROP NOT NULL,
ALTER COLUMN "jobHoursMin" DROP NOT NULL,
ALTER COLUMN "jobHoursMax" DROP NOT NULL,
ALTER COLUMN "jobSalaryMin" DROP NOT NULL,
ALTER COLUMN "jobSalaryMax" DROP NOT NULL,
ALTER COLUMN "jobSalaryPeriod" DROP NOT NULL,
ALTER COLUMN "jobSalaryCurrency" DROP NOT NULL,
ALTER COLUMN "personalInfoCv" SET DEFAULT 'NONE',
ALTER COLUMN "personalInfoCoverLetter" SET DEFAULT 'NONE',
ALTER COLUMN "personalInfoPhoto" SET DEFAULT 'NONE',
ALTER COLUMN "personalInfoPhone" SET DEFAULT 'NONE',
ALTER COLUMN "screeningQuestionsTemplateId" DROP NOT NULL,
ALTER COLUMN "pipelineTemplateId" DROP NOT NULL,
ALTER COLUMN "autoConfirmationEmailId" DROP NOT NULL,
ALTER COLUMN "isPublished" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_screeningQuestionsTemplateId_fkey" FOREIGN KEY ("screeningQuestionsTemplateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_pipelineTemplateId_fkey" FOREIGN KEY ("pipelineTemplateId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD CONSTRAINT "Offer_autoConfirmationEmailId_fkey" FOREIGN KEY ("autoConfirmationEmailId") REFERENCES "Template"("id") ON DELETE SET NULL ON UPDATE CASCADE;
