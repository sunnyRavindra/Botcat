# Use an official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the desired port (change it to match your Next.js application's port)
EXPOSE 3000

# Set the command to start the Next.js application
CMD ["npm", "start"]
