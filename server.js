const express =  require('express');
const app = express();
const port = 3000;

app.get('/posts', async(req, res) => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await response.json();
        res.send(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
});


app.get('/posts/:id', async(req, res) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        const data = await response.json();
        res.send(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
