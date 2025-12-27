FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
EXPOSE 4000
CMD ["nginx","-g","daemon off;"]