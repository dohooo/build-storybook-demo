### expect

1. build dir structure like this:
```
-- storybook-static  
 |-- demo(project name)  
    | -- favicon.ico  
    | -- project.json  
    | -- stories.json  
    | -- index.html  
    | -- ...  
```

2. In storybook-static dir, exec static-server command.
```
npx static-server -o
```

3. Open http://localhost:xxxx/demo , It will show the demo page well.