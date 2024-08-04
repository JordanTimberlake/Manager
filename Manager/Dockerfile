# Use an official node image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY ./Manager/package*.json ./
COPY ./Manager/pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of your application code
COPY ./Manager .

# Build the application
RUN pnpm build

# Expose the port that the application runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "start"]
