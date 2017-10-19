# FlutterDux - Web Starter

A redux project setup for webpack-dev-server and Remote Redux DevTools.
This website can be

## Getting started

    yarn install

## Run the dev server

    npm run dev

## Run RemoteDev Server

    npm install -g remotedev-server

    remotedev --h=0.0.0.0 --port=8081

```
const store = createStore(todoApp, devToolsEnhancer({
  realtime: true,
  hostname: '<YOUR LAN IP>',
  port: 8081
}))
```