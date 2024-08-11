FROM node:lts-buster
RUN git clone https://github.com/M3264/Mirage-Md /root/M3264
WORKDIR /root/M3264/
RUN npm install
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm", "start"]
