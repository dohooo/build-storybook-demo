### expect

1. build dir structure like this:

```
-- storybook-static
 |-- components
    | -- favicon.ico
    | -- project.json
    | -- stories.json
    | -- index.html
    | -- ...
```

2. In storybook-static dir, exec static-server command.

```
$ cd storybook-static
$ npx static-server ./ -o
```

3. Open http://localhost:xxxx/components , It will show the demo page well.
