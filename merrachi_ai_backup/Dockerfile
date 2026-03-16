# Merrachi AI - Development Dockerfile for Coolify
FROM node:20-alpine

WORKDIR /app

# Install dependencies for node-gyp (if needed)
RUN apk add --no-cache libc6-compat

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Set environment variables for development server
ENV NODE_ENV=development
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Run development server
CMD ["npm", "run", "dev"]
