#!/bin/bash
# Set your AWS S3 bucket name and region
S3_BUCKET_NAME="home-vibe"
AWS_REGION="us-east-2"
# Check if the S3 bucket exists
if aws s3api head-bucket --bucket $S3_BUCKET_NAME 2>/dev/null; then
  echo "Bucket $S3_BUCKET_NAME already exists."
else
  # Create S3 bucket
  aws s3api create-bucket --bucket $S3_BUCKET_NAME --region $AWS_REGION
  echo "Bucket $S3_BUCKET_NAME created."
# Enable static website hosting
aws s3 website s3://$S3_BUCKET_NAME/ --index-document index.html
echo "Static website hosting enabled for $S3_BUCKET_NAME."
fi
# Build React app (make sure to replace 'npm run build' with your build command)
cd frontend
npm run build
# Upload build to S3 bucket
aws s3 sync build/ s3://$S3_BUCKET_NAME
echo "React app deployed to S3 bucket $S3_BUCKET_NAME."
# Clear cached object
aws cloudfront create-invalidation --distribution-id E2HQLIVFNWMGUG --paths "/*"








