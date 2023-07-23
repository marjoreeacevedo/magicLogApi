FROM node:18
# Adding build tools to make yarn install work on Apple silicon / arm64 machines


COPY package*.json ./
RUN npm install
WORKDIR /app
COPY . .
CMD ["node", "index.js"]