FROM lipanski/docker-static-website:2.1.0

COPY ./storybook-static .

CMD ["/busybox", "httpd", "-f", "-v", "-p", "8080", "-c", "httpd.conf"]
