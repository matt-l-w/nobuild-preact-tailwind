FROM caddy

COPY *.html /usr/share/caddy
COPY *.mjs /usr/share/caddy
COPY output.css /usr/share/caddy
