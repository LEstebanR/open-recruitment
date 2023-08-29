/*
  Warnings:

  - The values [TAG] on the enum `TagSourceType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TagSourceType_new" AS ENUM ('TAG_OFFER', 'TAG_CANDIDATE', 'SOURCE');
ALTER TABLE "TagSource" ALTER COLUMN "type" TYPE "TagSourceType_new" USING ("type"::text::"TagSourceType_new");
ALTER TYPE "TagSourceType" RENAME TO "TagSourceType_old";
ALTER TYPE "TagSourceType_new" RENAME TO "TagSourceType";
DROP TYPE "TagSourceType_old";
COMMIT;
