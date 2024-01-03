-- CreateEnum
CREATE TYPE "Rating" AS ENUM ('NOT_ESSENTIAL', 'NICE_BONUS', 'FAIRLY_IMPORTANT', 'VERY_DESIRABLE', 'NON_NEGOTIABLE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_features" (
    "id" SERIAL NOT NULL,
    "feature" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "home_features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feature_ratings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "featureId" INTEGER NOT NULL,
    "rating" "Rating" NOT NULL,

    CONSTRAINT "feature_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_connections" (
    "id" SERIAL NOT NULL,
    "initatingUserId" INTEGER NOT NULL,
    "acceptingUserId" INTEGER NOT NULL,

    CONSTRAINT "user_connections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "home_features" ADD CONSTRAINT "home_features_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_ratings" ADD CONSTRAINT "feature_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feature_ratings" ADD CONSTRAINT "feature_ratings_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "home_features"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_connections" ADD CONSTRAINT "user_connections_initatingUserId_fkey" FOREIGN KEY ("initatingUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_connections" ADD CONSTRAINT "user_connections_acceptingUserId_fkey" FOREIGN KEY ("acceptingUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
