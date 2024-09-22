# Use the official Node.js image
FROM node:14-alpine

# Set the working directory to the frontend folder
WORKDIR /app/frontend

# Copy the package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY frontend/ .

# Expose port 3000 for the frontend
EXPOSE 3000

# Run the frontend application in development mode
CMD ["npm", "run", "dev", "--", "--host"]
