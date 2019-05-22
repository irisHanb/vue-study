const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// parse application/json
app.use(bodyParser.json());

var data = [
  {
    id: 1,
    text: '청소하기',
    done: false
  },
  {
    id: 21,
    text: '식사하기',
    done: false
  },
  {
    id: 2,
    text: '운동하기',
    done: false
  }
];

app.get('/api/todos', (req, res) => res.send(data));

app.get('/api/todos/:id', (req, res) => {
  const todo = data.filter(el => el.id == req.params.id)[0];
  console.log('>>> ', todo);
  if (!todo) {
    res.status(404);
    res.end();
    return;
  }
  res.send(todo);
});

app.post('/api/todos', (req, res) => {
  console.log(req.body);
  const newData = {
    ...req.body,
    id: Math.floor(Math.random() * 90000),
    done: false
  };

  data = [...data, newData];
  res.send(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
