# Event form

Application which are showing how to create event form in node.js.
Application saving data to database and sending a confirmation to user email.
Front-end of application is created in react-redux.

## Test application

You can test application with standard form.
To test application with custom form you need to allow [less secure](https://myaccount.google.com/lesssecureapps) applications in your google account.
If you don't have the email -> check SPAM folder.

## Technology stack
    - Node.Js
    - Express.JS
    - JavaScript
    - React
    - Redux
    - HTML5
    - SASS
    - MongoDB

## Installation
To install application you need to have a NPM(Node Package Manager). You can read about it on main NPM website.

After all you need to type in manager

```GIT
npm install
```

Next, you need to create file ".env" in this file you need to add some data:

Database information's:
```DATABASE
DATABASE_LOGIN=[Your login]
DATABASE_PASSWORD=[Your password]
```

To use mailing - add gmail information's like:
```GMAIL
GMAIL_USER=[Your email]
GMAIL_PASS=[Your password]
```

## Lint

To lint with eslint method use
```
npm run lint -- --fix
npm run lint
```

## Tests
Application has implemented test by using jest.
To run test type:

Run all tests
```Test whole project
npm run testAll
```

Test node
```Test Node
npm run test
```

Test Client
```Test Client
npm run testClient
```

## Database
Screenshot from database with test persons.

![Screenshot DB](https://i.ibb.co/v4LK67y/zrzutdb.png)"

## Usage
To use application you need to type

```GIT
npm start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
