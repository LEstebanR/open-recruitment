-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('SUPERADMIN', 'DEFAULT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userRole" "UserRoles" NOT NULL DEFAULT 'DEFAULT';
