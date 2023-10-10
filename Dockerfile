FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy your application source code from the build context to /app
COPY /src ./

# Copy package.json and package-lock.json* to the current working directory (/app)
COPY package.json package-lock.json* ./

# Install dependencies and clean npm cache
RUN npm ci && npm cache clean --force

# Expose port 3000
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["node", "index.js"]
