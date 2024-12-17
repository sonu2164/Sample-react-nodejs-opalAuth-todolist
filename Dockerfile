# Use the official Opal client image as a base
FROM permitio/opal-client:latest

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Set the working directory
WORKDIR /app

# Copy the application code into the container
COPY --chown=opal . /app/

# Install Python dependencies
RUN python setup.py install --user

# Install Node.js dependencies for both client and server
RUN npm install --prefix client
RUN npm install --prefix server

# Build the React application
RUN npm run build --prefix client

# Expose the ports for the application
EXPOSE 7002 3001

# Start the application (adjust the command as necessary)
CMD ["sh", "-c", "./wait-for.sh opal_server:7002 example_db:3306 --timeout=20 -- ./start.sh"]