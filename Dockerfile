# 1. For build React app
FROM node:16.13.1

# Set working directory
WORKDIR /app


COPY ./ /app
RUN npm install 

EXPOSE 8999

