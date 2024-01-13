/*
  Warnings:

  - You are about to drop the `feature_ratings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "feature_ratings" DROP CONSTRAINT "feature_ratings_featureId_fkey";

-- DropForeignKey
ALTER TABLE "feature_ratings" DROP CONSTRAINT "feature_ratings_userId_fkey";

-- DropTable
DROP TABLE "feature_ratings";

-- CreateTable
CREATE TABLE "saved_features" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "featureId" INTEGER NOT NULL,
    "rating" "Rating",

    CONSTRAINT "saved_features_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "saved_features" ADD CONSTRAINT "saved_features_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_features" ADD CONSTRAINT "saved_features_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "home_features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
