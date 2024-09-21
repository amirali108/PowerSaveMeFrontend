# Frontend Dockerfile (PowerSaveMeFrontend)

# Use the official Node.js image to build the frontend
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code to the container
COPY . .

# Build the frontend application
RUN npm run build

# Expose the port for the frontend (typically React runs on port 3000)
EXPOSE 3000

# Start the frontend application
CMD ["npm", "start"]
