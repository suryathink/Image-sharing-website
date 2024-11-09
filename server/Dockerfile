# Use Node.js 18 base image
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8765

CMD ["node", "index.js"]
