## Preference Center

I wanted to create an interface where users can select, deselect and re-order various categories of items to indicate what they would like to show on their homepage. I thought that a drag & drop interface would be convenient and usable for a majority of users, so that is what I have implemented here. 

The user is presented with two columns of item categories. Items on the left are included in the user's preferences, and can be sorted by drag'n'drop and removed by clicking the X button. Items on the right are not included in the user's preferences, and can be added to the preferences by clicking the + button. 

### Back End

The back end is implemented in node.js and express, communicating with a MongoDB database via mongoose. 
`server.js` contains the node/express server. I needed a bit more control over the `webpack.config.js` and `package.json` files to implement SCSS, so I opted not to use `create-react-app` and instead implement the server by hand. I relied heavily on several tutorials to get this section up and running; though this is far from my first node/express app, I do it infrequently enough that I needed a reminder on how to set up a server. 

Not included in this repo is a `config.js` file that contains database credentials as well as environmental variables. Here is an outline of what that file contains (without including database credentials):

```
const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const mongoDBcred = MLAB_USERNAME:MLAB_PASS;
export const mongoDBserv = MLAB_URL:PORT;
export default {
  port: env.PORT || 8080
};
```

I used `nodemon` to avoid having to restart the server every time I made changes. 

### API & Database Model

The Node server is running 2 processes: the front-end server to deliver content to the browser, and an API. This enabled me to set up the back end logic before implementing the front end. API processes run out of `/api/` and use raw JSON data. I used the node module `body-parser` to parse responses from the API. CRUD processes were added one by one and tested from Postman. Not only would this be a good feature to have in production (so that other services could access a customer's preferences), it also made troubleshooting and testing the front end much easier as I could make a change on the front end then send a GET request for the resource and compare. 

### React, JSX, & Babel

The front end is implemented in React using ES6 syntax. Due to lack of browser support for ES6, Babel is used as a transpiler. This enables use of JSX syntax as well which I find to be a fantastic feature of React. One downside is that the bundle.js file created by Babel & Webpack is huge, at least in development. Investigating ways to bring this file size down would be an important step before putting this feature into production. 

#### React-Sortable-HOC
I wanted to use a drag & drop interface for sorting preferences but did not want to implement drag & drop functionality myself, feeling it was beyond the scope of my abilities as well as this project. I found several options on npm and github and settled on react-sortable-hoc from @clauderic. Originally I wanted to have both the Preferences and the Preferece Options categories to be drag & drop but this library does not currently support multiple sorting containers. However it does have good support for touch screens while another popular option, `react-dnd`, does not. I decided to have only the Preferences section drag and drop to get around this limitation; adding a Remove button to Preference items and an Add button to the Preference Option items solved the issue. 

### Redux
Adding Redux to the project was almost an afterthought but ended up solving the biggest challenge, namely, how do I let a number of components have access to the state of the application without making lots of database calls. Redux is a natural fit with React sharing the concept of immutable state. The actions I implemented reflect the actions of importing preferences from the server, adding and removing preferences, and sorting preferences. 

### Accessibility
I added keyboard accessibility for the add and remove functions. However, I have not yet figured out how to implement accessibility for the drag and drop functionality. 

### Room for Improvement
Adding authentication and support for multiple users would be the next logical step - for now this only works for a single user and relies on hard-coded user ID in the URL.  

Adding keyboard accessibility for drag and drop would be crucial for making this feature usable for folks with limited sight or poor motor control. 
