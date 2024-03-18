# 1단계: Storybook 빌드
FROM node:16-alpine as builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 나머지 소스 코드 복사
COPY . .

# Storybook 빌드
RUN npm run build-storybook

# 2단계: 호스팅 환경
FROM nginx:alpine

# 빌드 단계에서 생성된 storybook-static 폴더를 Nginx HTML 디렉토리로 복사
COPY --from=builder /app/storybook-static /usr/share/nginx/html

# 포트 80 공개
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]