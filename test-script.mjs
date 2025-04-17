export {}

const formatDockerfileContents = await import('@reteps/dockerfmt').then((value) => value.formatDockerfileContents);

console.log(
  await formatDockerfileContents(`
FROM nginx
WORKDIR /app
ARG PROJECT_DIR=/
ARG NGINX_CONF=nginx.conf
COPY $NGINX_CONF /etc/nginx/conf.d/nginx.conf
COPY $PROJECT_DIR /app
CMD mkdir --parents /var/log/nginx && nginx -g "daemon off;"
`.trim(),
    {
      indent: 4,
      spaceRedirects: false,
      trailingNewline: true,
    },
  ),
);
