- Advantages 
```
    Separate build-time dependencies from runtime dependencies
    Reduce overall image size by shipping only what your app needs to run
```

- React Multistage build
```
FROM node:18 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```
