/*
  Warnings:

  - Added the required column `rating` to the `feature_ratings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feature_ratings` ADD COLUMN `rating` ENUM('NOT_ESSENTIAL', 'NICE_BONUS', 'FAIRLY_IMPORTANT', 'VERY_DESIRABLE', 'NON_NEGOTIABLE') NOT NULL;
