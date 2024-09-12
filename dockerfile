FROM node:20
WORKDIR /app/frontend
COPY package*.json ./
COPY . .
RUN  npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm","start" ]
