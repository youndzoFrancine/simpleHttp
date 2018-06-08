FROM node:8.11.1

MAINTAINER Francine Youndzo <francine.youndzokengne@heig-vd.ch>

COPY src /opt/app/

WORKDIR /opt/app/

RUN npm install 

ENTRYPOINT ["node", "/opt/app/ClockClient.js"]
