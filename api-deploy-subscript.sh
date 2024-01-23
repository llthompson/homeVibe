DOCKER_IMAGE_NAME="homevibe"


echo "Connecting to EC2 instance and pulling Docker image..."
# aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 654654435264.dkr.ecr.$AWS_REGION.amazonaws.com"
docker login -u AWS -p $(aws ecr get-login-password --region us-east-2) 654654435264.dkr.ecr.us-east-2.amazonaws.com
docker pull 654654435264.dkr.ecr.us-east-2.amazonaws.com/$DOCKER_IMAGE_NAME:latest

# Restart Docker container on EC2 instance
echo "Restarting Docker container on EC2 instance..."
docker stop $DOCKER_IMAGE_NAME && docker rm $DOCKER_IMAGE_NAME
docker run -d --restart always --name $DOCKER_IMAGE_NAME -p 80:8000 654654435264.dkr.ecr.us-east-2.amazonaws.com/$DOCKER_IMAGE_NAME:latest