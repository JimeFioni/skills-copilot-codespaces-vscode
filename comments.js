// Create web server that will accept POST requests to /comments and respond with a JSON object containing the comments array.
// Each comment should have an id (a unique number) and the text of the comment.
// When the server receives a POST request to /comments, it should add the comment to the array and return the comment object.
// If the request does not include a comment, the server should respond with a 400 status code.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const { comment } = req.body;
    if (!comment) {
        return res.status(400).json({ error: 'Comment is required' });
    }
    const id = comments.length;
    comments.push({ id, comment });
    res.json({ id, comment });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});