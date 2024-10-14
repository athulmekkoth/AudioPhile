# Use a multi-stage build to reduce the final image size
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy only the production dependencies
COPY package*.json ./

# Set NODE_ENV to production to install only production dependencies
ENV NODE_ENV=production
RUN npm ci --omit=dev

# Copy application files from the builder stage
COPY --from=builder /app .

# Install PM2 globally
# RUN npm install -g pm2

# Copy the ecosystem config
# COPY ecosystem.config.cjs .

# Switch to a non-root user
USER node

EXPOSE 5000

# Command to run your app
CMD ["node", "index.js"]
