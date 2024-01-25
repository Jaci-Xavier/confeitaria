FROM node:18.18.1-slim

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./

COPY . .

EXPOSE 3000

RUN npm run build

ENTRYPOINT [ "npm", "run" ]

CMD ["start"]