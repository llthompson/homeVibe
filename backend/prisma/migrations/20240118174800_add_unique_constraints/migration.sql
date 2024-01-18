/*
  Warnings:

  - A unique constraint covering the columns `[auth0_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[feature]` on the table `home_features` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[featureId,userId]` on the table `saved_features` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_auth0_id_key" ON "User"("auth0_id");

-- CreateIndex
CREATE UNIQUE INDEX "home_features_feature_key" ON "home_features"("feature");

-- CreateIndex
CREATE UNIQUE INDEX "saved_features_featureId_userId_key" ON "saved_features"("featureId", "userId");
