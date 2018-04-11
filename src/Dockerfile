FROM mhart/apline-node

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /use/src/app

# Install app dependencies
COPY server/package.json /usr/src/app/
RUN npm Install

# Bundle app source
COPY server/ /usr/src/app/

ENV PORT 80

CMD [ "npm", "start" ]