const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    listTitle: day, //listTitle and newListItems are VARIABLES!!
    newListItems: items
  });
});

app.post('/', (req, res) => {

  item = req.body.newItem; //newItem is a variable that stores the value of newly entered entry in 
  // our todolist. bodyParser uses this variable.

  if(req.body.list === "work"){
    workItems.push(item);
    res.redirect('/work');
  }
  else{
    items.push(item); //adding item to our array
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('list', {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

app.get('/about' , (req,res) => {
  res.render('about');
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
})