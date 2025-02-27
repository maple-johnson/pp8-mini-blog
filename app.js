//Import Libraries
import express from 'express';
import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config();

//Define our database credentials
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT
});

//Define function to connect to the DB
async function connect() {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to the database!')
        return conn;
    } catch (err) {
        console.log(`Error connecting to the database ${err}`)
    }
}

//Instantiate an Express application
const app = express();

//Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

//Set the view engine for our application
app.set('view engine', 'ejs');

//Serve static files from the 'public' directory
app.use(express.static('public'));

//Define a port number for our server to listen on
const PORT = process.env.APP_PORT || 3000;

//Define a "default" route for our home page
app.get('/', (req, res) => {

    // Send our home page as a response to the client
    res.render('home');
});

app.post('/submit', async (req, res) => {
     const newPost = {
          name: req.body.name,
          title: req.body.title,
          content: req.body.content
     };

     console.log(newPost);
     //posts.push(newPost);

     const conn = await connect();

     const insertQuery = await conn.query(`INSERT INTO posts
        (name, title, content)
        values (?, ?, ?)`,
        [newPost.name, newPost.title, newPost.content]);

     res.render('confirm', { newPost });
});

app.post('/entries', async (req, res) => {

    const conn = await connect();

    //Query the database
    const posts = await conn.query('SELECT * FROM posts')

    res.render('entries.ejs', {posts});
});

//Tell the server to listen on our specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

