-- DropIndex
DROP INDEX "CandidateTag_candidateId_tagId_key";

-- AlterTable
ALTER TABLE "CandidateTag" ADD CONSTRAINT "CandidateTag_pkey" PRIMARY KEY ("candidateId", "tagId");
