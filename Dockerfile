FROM nginx:alpine
LABEL author="Binod Kafle"
COPY ./build /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]