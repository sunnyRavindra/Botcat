```Dockerfile
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
```

Make sure to replace `3000` with the actual port number your Next.js application listens on. This Dockerfile assumes that your project structure includes `package.json`, `package-lock.json`, and a build script defined in `scripts` section of `package.json`.

To build a Docker image using this Dockerfile, navigate to the directory containing the Dockerfile and run the following command:

```bash
docker build -t your-image-name .
```

Replace `your-image-name` with the desired name for your Docker image.

Once the image is built, you can run a container based on this image using the following command:

```bash
docker run -p 3000:3000 your-image-name
```

This will map port 3000 of the container to port 3000 of your host machine. You can then access your Next.js application by visiting `http://localhost:3000` in your browser.

Remember to customize the Dockerfile as per your project's specific requirements, such as additional dependencies or environment variables.