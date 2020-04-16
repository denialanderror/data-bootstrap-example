# Data Bootstrap Example

This is a simple project to show how you can use [json-server](https://github.com/typicode/json-server) to provide a mock backend without having to make any changes to your front end code. This allows a team to quickly build a fully featured UI without having to worry about a server or database to communicate with.

All the app does is ask for a value and if that value is in the database, it will return some text. For example, if you enter `1`, it will return `1 + 1 = 2`. Look in `json-server/db.json` for more ids, or add some more if you want to play around with it.

## Running the application

1. `yarn install` to install all the dependencies
2. `yarn local-dev` to run the app and the json-server

Regarding that second step, you will see in `package.json` that `local-dev` is doing `concurrently \"yarn local-api\" \"yarn start\"`. `concurrently` is a Node service that runs more than one command at the same time, `local-dev` starts up the json-server, and `start` runs the React app.

## Walkthrough

This is built with [Parcel](https://en.parceljs.org/) as the bundler instead of something like Create React App and Webpack, purely because I prefer it (less configuration and only adds what I've asked it to), so don't worry if some of the setup looks unfamiliar. The React app itself is very straight forward - it has a form with an input and on submit, it calls an API. I've used [Axios](https://github.com/axios/axios) instead of Fetch because it handles errors a bit nicer but Kent Dodds wrote a nice article on [improving fetch](https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper) that does the same thing natively. If the API finds a match, it sets a value which is displayed in the value component and if it doesn't, it shows the error component.

The API called comes from `process.env.API_ENDPOINT`, which looks for an environment variable set in the `.env` file. This is how it works in Parcel but Create React App has [similar functionality](https://create-react-app.dev/docs/adding-custom-environment-variables/). You'll see that the variable is set to `http://localhost:9090/data/`. Json-server will then look in the `json-server/db.json` file for the value passed in. The `/data` part indicates the data will be under the `data` key and the value passed in (e.g. `/data/1`) will then match to the `id` value.

When you then come to create your backend and you want to call it instead of the fake json-server, just change the `API_ENDPOINT` value.

Hope that helps!