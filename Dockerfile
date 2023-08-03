# Use an official Node.js image as the base
FROM node:16-alpine

#Set the working directory inside the container
WORKDIR /app

# Copy package.json file
COPY package.json .

# Install project dependencies
RUN npm install

# Copy package.json file
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the desired port (change it to match your Next.js application's port)
EXPOSE 3000

# Set the command to start the Next.js application
CMD ["npm", "start"]
