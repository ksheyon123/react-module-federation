FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# nginx 설치
RUN apk add --no-cache nginx

# nginx 설정 파일 복사 (기본 설정 파일 대체)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]