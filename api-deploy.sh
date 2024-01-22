#!/bin/bash

# AWS CLI variables
AWS_REGION="us-east-2"
EC2_INSTANCE_ID="i-0fc6ad939c10cfedd"
EC2_INSTANCE_IP="3.133.142.146"

# Docker variables
DOCKER_IMAGE_NAME="homevibe"
DOCKER_FILE_PATH="./backend/Dockerfile"
DOCKER_BUILD_CONTEXT="./backend"

# Build Docker image
echo "Building Docker image..."
docker build -t $DOCKER_IMAGE_NAME -f $DOCKER_FILE_PATH $DOCKER_BUILD_CONTEXT

# AWS CLI: Transfer Docker image to ECR (Amazon Elastic Container Registry)
echo "Logging in to Amazon ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 654654435264.dkr.ecr.$AWS_REGION.amazonaws.com

# Tag Docker image
echo "Tagging Docker image..."
docker tag $DOCKER_IMAGE_NAME:latest 654654435264.dkr.ecr.$AWS_REGION.amazonaws.com/$DOCKER_IMAGE_NAME:latest

# Push Docker image to ECR
echo "Pushing Docker image to Amazon ECR..."
docker push 654654435264.dkr.ecr.$AWS_REGION.amazonaws.com/$DOCKER_IMAGE_NAME:latest

# AWS CLI: Update ECS (Amazon Elastic Container Service) task definition
# echo "Updating ECS task definition..."
# aws ecs update-service --cluster <your_ecs_cluster_name> --service <your_ecs_service_name> --force-new-deployment

# SSH into EC2 instance and pull the updated Docker image
# echo "Connecting to EC2 instance and pulling Docker image..."
# ssh -i ~/.ssh/homevibe.pem ubuntu@ec2-3-133-142-146.us-east-2.compute.amazonaws.com "aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 654654435264.dkr.ecr.$AWS_REGION.amazonaws.com"
# ssh -i ~/.ssh/homevibe.pem ubuntu@ec2-3-133-142-146.us-east-2.compute.amazonaws.com "docker pull $DOCKER_IMAGE_NAME:latest"

# # Restart Docker container on EC2 instance
# echo "Restarting Docker container on EC2 instance..."
# ssh -i ~/.ssh/homevibe.pem ubuntu@ec2-3-133-142-146.us-east-2.compute.amazonaws.com "docker stop $DOCKER_IMAGE_NAME && docker rm $DOCKER_IMAGE_NAME"
# ssh -i ~/.ssh/homevibe.pem ubuntu@ec2-3-133-142-146.us-east-2.compute.amazonaws.com "docker run -d --name $DOCKER_IMAGE_NAME -p 80:8000 $DOCKER_IMAGE_NAME:latest"

ssh -i ~/.ssh/homevibe.pem ubuntu@ec2-3-133-142-146.us-east-2.compute.amazonaws.com "bash -s" <./api-deploy-subscript.sh