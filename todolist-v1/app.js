const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let items = ["Buy Food" , "Cook Food" , "Eat Food"];

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render('list',
     {kindOfDay: day,       //kindOfDay and newListItems are VARIABLES!!
      newListItems: items  
    });
});

app.post('/', (req,res) => {
    item = req.body.newItem;     //newItem is a variable that stores the value of newly entered entry in 
                                 // our todolist. bodyParser uses this variable.
    items.push(item); //adding item to our array

    res.redirect('/');
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
}) 