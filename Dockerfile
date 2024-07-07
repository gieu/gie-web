FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker layer caching
COPY package.json .

# Install npm dependencies
RUN npm config set fetch-retry-maxtimeout 120000 \
    && npm install --only=production \
    && npm install -g gatsby-cli

# Copy the rest of the application code
COPY . .

# Build the Gatsby static site
RUN gatsby build --prefix-paths

EXPOSE 80

CMD gatsby serve --port 80 --host 0.0.0.0
