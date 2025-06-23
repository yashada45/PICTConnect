const express = require('express');
const cors = require('cors');
const { addExp, delExp, getExp } = require('./ExpenseManager');
const { addUser, validateUser } = require('./UserManager');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/addUser', (req, res) => {
    const userID = req.body.userID;
    const pwd = req.body.pwd;
    addUser(userID, pwd, (err, newData) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        else
        {
            console.log(newData);
            res.send(newData);
        }
    });
});

app.post('/login', (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;
    validateUser(user, pwd, (err, newData) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        else
        {
            console.log(newData);
            res.send(newData);
        }
    });
});

app.post('/addExp', (req, res) => {
    const user = req.body.user;
    const data = req.body.data;
    addExp(user, data, (err, newData) => {
        if (err) {
            return res.status(500).json({ error: 'Error in saving data' });
        }
        else
        {
            console.log(newData);
            res.send(newData);
        }
    });
});

app.post('/delExp', (req, res) => {
    const user = req.body.user;
    const id = req.body.id;
    delExp(user, id, (err, newData) => {
        if (err) {
            return res.status(500).json({ error: 'Error in saving data' });
        }
        else
        {
            console.log(newData);
            res.send({id: newData});
        }
    });
});

app.post('/getExp', (req, res) => {
    console.log('getExp API');
    const user = req.body.user;
    const data = getExp(user, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading file' });
        }
        else
        {
            console.log(data);
            res.send(data);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
