# GMAIL MESSAGE REACTJS
Gmail Message project is developed using ReactJS frontend framework. This project implements Gmail inbox features like magniying message on hover, marking message as read, marking message as favorite, opening message body in modal


### Install NodeJS
Refer to https://nodejs.org/en/ to install nodejs

### Install vite
Refer to https://vite.dev/guide/ to install vite

## Cloning and Running the Application in local

### Running Application in Docker Containers

Clone the project 

Go into the project folder fullstack app and run the below command

```bash
docker compose up
```

### Running Application in local Environment

clone the project into local

#### Spinning Client server 

Go into the client folder gmail-message-reactjs and run the below command to install all npm packages

```bash
npm install
```

To start the application, run the below command

```bash
npm run dev
```

#### Spinning Express backend server

Go into the backend server folder backend-server and run the below command to install all npm packages


```bash
npm install
```

To start the server, run the below command

```bash
node server.js
```

## Screenshots

### snapshot of Gmail Inbox Message

![Gmail Inbox Message snapshot](/snapshots//first_pic.PNG)

### snapshot of the UI showing selecting favorite message and marking message read

![Selecting favorite message and marking message read](/snapshots/second_pic.PNG)

### snapshot of message body opened in a modal 

![Message body opened in Modal](/snapshots/third_pic.PNG)

### snapshot of pagination showing prev button, current selected page, next button

![Pagination](/snapshots/pagination.PNG)