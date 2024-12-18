# Use a lightweight Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage caching
COPY package.json ./

# Clean npm cache to avoid corrupted packages
# RUN npm install -g npm@latest
# Install dependencies (skip peer deps issue)
RUN npm install 

# Copy the source code into the container
COPY . .

# Expose the development server's port
EXPOSE 3000

# Command to run the React development server
CMD ["npm", "run", "dev"]
