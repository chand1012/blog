serve:
    hugo serve -t terminal -D -w

add name:
    hugo new content/posts/{{name}}/index.md

dev: serve
