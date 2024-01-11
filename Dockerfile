# Base image for building the React frontend
FROM node:16-alpine AS react-builder

WORKDIR /frontend

COPY /frontend/package*.json ./
RUN npm install
COPY /frontend/. .
RUN npm run build

# Base image for building and running the Node.js backend
FROM node:16-alpine AS node-builder

WORKDIR /backend

COPY /backend/package*.json ./
RUN npm install
COPY /backend/. .

# Production image based on Alpine Linux
FROM nginx:1.23-alpine AS production

COPY --from=react-builder /frontend/build /usr/share/nginx/html
COPY --from=node-builder /backend /app

EXPOSE 80 3000 3003

CMD ["nginx", "-g", "daemon off;", "node /app/index.js;"]

# sudo docker build -t my-app .
# sudo docker run -p 80:3000 my-app