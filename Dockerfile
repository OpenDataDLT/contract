FROM node:10

# make the 'app' folder the current working directory
WORKDIR /odpid_service

COPY . /odpid_service

RUN npm install -g truffle

RUN npm install

RUN truffle compile

EXPOSE 3000

#Running the project
CMD [ "npm", "start"]
