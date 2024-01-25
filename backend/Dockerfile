FROM node:18.18.1-slim

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]

CMD ["dev"]
