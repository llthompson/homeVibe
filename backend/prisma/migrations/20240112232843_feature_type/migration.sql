-- CreateEnum
CREATE TYPE "FeatureType" AS ENUM ('STANDARD', 'ADVANCED', 'CUSTOM');

-- AlterTable
ALTER TABLE "home_features" ADD COLUMN     "type" "FeatureType" NOT NULL DEFAULT 'STANDARD';
