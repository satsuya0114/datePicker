# install and cache app dependencies
FROM node:14.15.1-alpine AS builder
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
# COPY dist ./dist
COPY src ./src
COPY . .
RUN npm run build

# -----------------
# Production Build
# -----------------
FROM nginx:1.19.5-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
