const posts = require('../data/posts');
const connection = require('../database/connection');

function index(req, res) {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'database quey failed' });
        res.json(results)
    })

    /* let filteredPost = posts
    if (req.query.tags) {
        filteredPost = posts.filter(
            post => post.tags.includes(req.query.tags)
        )
    }
    res.json(filteredPost)*/
}

function show(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    if (!post) {
        res.status(404)
        return req.json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }

}
function store(req, res) {
    //console.log(req.body)

    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    posts.push(newPost);
    console.log(posts)
    res.status(201)
    res.json(newPost)


}
function update(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            error: 'not found',
            message: 'post non trovato'
        })
    }
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    res.json(post)
}
function destroy(req, res) {
    const { id } = req.params;
    connection.query('DELETE from posts where id=?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'failed to delete post' })
        res.sendStatus(204)
    });





    /*const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "nessun contenuto"
        })
    }
    posts.splice(posts.indexOf(post), 1)
    res.sendStatus(204)
    */
}

module.exports = { index, show, store, update, destroy }