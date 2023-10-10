# Server for Batch Email Sender

Coded in

- Node
- Express


## API Gateway

api endpoint is /sendEmail 
Expects req obj to conform to the following template:
```js
{
    "from": string,
    "to": string,
    "subject": string,
    "email" : string,
    "key": string // key is enabled by accessing the host's email settings, MFA and there generate a One Time Key; pass that here
}
```
## Dockerized Container

> Accessible on docker hub and run it and integrate in into your app

[Docker Hub Link](https://hub.docker.com/repository/docker/eggsyoncode/node-mailer-template/general)