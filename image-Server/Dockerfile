FROM node:8.11.1

MAINTAINER FRANCINE YOUNDZO <francine.youndzokengne@heig-vd.ch>

COPY src /opt/app/
WORKDIR /opt/app/

RUN npm install 

ENTRYPOINT ["node", "/opt/app/ClockServer.js"]
