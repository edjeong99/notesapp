This is a note taking app.
It is a personal project to improve my front-end and back-end development skills.
Front-end and Back-end each took 4 days to develop as part of Lambda School's curriculum. I then deployed both Front-end and Back-end.
Due to time constrains only basic functionalities are implemented for now.
Currently, I am improving CSS and plan to add more functionalities.

### to test site

You can visit https://ed-notes.netlify.com to see the site. You can create an account or use this credential username : q, password : 1.

### Deployment

Front End : https://ed-notes.netlify.com
Back End : https://ed-notes.herokuapp.com/

### Installation

To install the application in a local dev environment, run `yarn install` in the root folder as well as the client folder. Then, in the root folder you run `yarn server` and in the client folder you run `yarn start`.

### Tech Stack Rationale

#### Front End

**Solution:** React, React Router, Redux
In the process of adding Styled Components and Semantic UI
Plan to add Firebase Oauth, Stripe, etc

- Organizes state and manages front-end part of the project, reduces need for page reloads during navigation
- Routing links
- DOM Manipulation
- Reusable components
- Performance
- Documentation and ease-of-use/implementation

#### Back End

**Solution:** Node, Express, 

- JavaScript on the front and back end
- Reduces server-side logic complexity -> faster development
- Minimalist and un-opinionated framework
- Performance and cross-platform coverage
- Used bcryptjs and jsonwebtoken for auth/security

#### Database

**Solution:** SQLite for dev and PostgreSQL for prod, Knex

- Structured schemas to define data
- Relationships between data
- Spread data across tables
- Able to query tables

### Back-end API

##### GET https://https://ed-notes.herokuapp.com/allnotes/:id

Returns an array of all the notes of logged users.

##### GET https://ed-notes.herokuapp.com/api//notes/:id

Returns an note of the id.

##### POST https://https://ed-notes.herokuapp.com/api//addnote

Add a new note to DB

##### PUT https://https://ed-notes.herokuapp.com/notes/:id

Edit an existing note of the id. The content of edited note is send as req.body in a format of
{
title : "title",
textBody : "notes"
}

##### DELETE https://https://ed-notes.herokuapp.com/api/notes/:id

Delete a note of the id

##### GET https://https://ed-notes.herokuapp.com/api/search

Returns those notes that matches query

End
