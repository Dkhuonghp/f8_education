const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const methodsOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3001;

const route = require('./routes');
const data = require('./config/db');

//Connect to DB
data.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodsOverride('_method'));

//! HTTP logger
// app.use(morgan('combined'));

//! Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//! Routers
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
