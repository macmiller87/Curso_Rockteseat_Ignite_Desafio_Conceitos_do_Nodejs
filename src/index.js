const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];


function checksExistsUsername(req, res, next) {

    const { username } = req.headers;
    const user = users.find((user) => user.username === username);

    if(!user) {

        return res.status(404).json({error: "User not found !"});
    }

    req.user = user;

    return next();

}

app.post("/users", (req, res) => {

    const { name, username } = req.body;

    const userAlredyExistis =  users.find(user => user.username === username);

    if(userAlredyExistis) {

        return res.status(400).json({ error: "Username already exists !"});
    }

    const user = {

        id: uuidv4(),
        name,
        username,
        todos: []

    };

    users.push(user);

    return res.status(201).json(user);
    
});

app.get("/todos", checksExistsUsername, (req, res) => {

    const { user } = req;

    return res.json(user.todos);

});

app.post("/todos", checksExistsUsername, (req, res) => {
    
    const { user } = req;
    const { title, deadline} = req.body;  
    
    const novoTodo = {

        id: uuidv4(),
        title,
        done: false,
        deadline: new Date(deadline),
        created_at: new Date(),

    }

    user.todos.push(novoTodo);

    return res.status(201).json(novoTodo);

});
  
app.put("/todos/:id", checksExistsUsername, (req, res) => {
    
    const { user } = req;
    const { title, deadline } = req.body; 
    const { id } = req.params;

    const todo = user.todos.find((todos) => todos.id === id);

    if(!todo) {

        return res.status(404).json({error: "the user id is not the same !"});

    }

    todo.title = title;
    todo.deadline = new Date(deadline);    

    return res.json(todo);

});

app.patch("/todos/:id/done", checksExistsUsername, (req, res) => {
    
    const { user } = req; 
    const { id } = req.params;

    const todo = user.todos.find((todos) => todos.id === id); 

    if(!todo) {

        return res.status(404).json({error: "the user id is not the same !"});

    }

    todo.done = true;

    return res.json(todo);

});

app.delete("/todos/:id", checksExistsUsername, (req, res) => {
    
    const { user } = req;
    const { id } = req.params;

    const todoIndex = user.todos.findIndex((todos) => todos.id === id);

    if(todoIndex === -1) {

        return res.status(404).json({error: "Todo not found !"});

    }

        user.todos.splice(todoIndex, 1);

    return res.status(204).json();

});


module.exports = app;