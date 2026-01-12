-- CreateEnum
CREATE TYPE "ContactStatus" AS ENUM ('new', 'read', 'replied');

-- AlterTable
ALTER TABLE "ContactForm" ADD COLUMN     "status" "ContactStatus" NOT NULL DEFAULT 'new';
