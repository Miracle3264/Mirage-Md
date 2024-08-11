FROM node:Its-buster
RUN git clone https://github.com/M3264/Mirage-Md /root/M3264
WORKDIR /root/M3264/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
