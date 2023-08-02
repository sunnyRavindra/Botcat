# Use an official Node.js image as the base
FROM node:16-alpine

#Set the working directory inside the container
WORKDIR /app

# Install Git
RUN sudo apk update
RUN sudo apk add git

# Clone the repository
RUN git clone https://github.com/sunnyRavindra/Cloud-DevOps-Large-Enterprise-Practical-Guide.git

# Install project dependencies
RUN npm install

# Build the Next.js application
RUN npm run build

# Expose the desired port (change it to match your Next.js application's port)
EXPOSE 3000

# Set the command to start the Next.js application
CMD ["npm", "start"]
