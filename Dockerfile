FROM node:20-alpine
COPY . /server
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]