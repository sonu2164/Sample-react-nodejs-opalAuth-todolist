# Use a lightweight Node.js version
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage caching
COPY package.json ./

RUN npm cache clean --force
# RUN npm install -g npm@latest
# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 3001

# Command to run the backend server
CMD ["npm", "start"]
