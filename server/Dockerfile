# Use Node.js 18 base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the port your app runs on (adjust if necessary)
EXPOSE 8765

# Start the application
CMD ["node", "index.js"]
