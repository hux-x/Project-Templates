# Use a small Node.js runtime
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy only package files to install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the compiled build folder
COPY dist ./dist

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port (should match your server)
ENV PORT=4000
EXPOSE 4000

# Start the server (assumes entry point is build/index.js)
CMD ["node", "dist/server.js"]
