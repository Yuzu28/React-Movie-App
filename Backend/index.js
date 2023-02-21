const express = require('express');
const userRouter = require('./routes/user');

const app = express();

//MVC Modal Controller
//use the user rounter
app.use(userRouter);


app.get('/about',(req,res) =>{
    res.send('<h2>horray<h2>')
})


// console.log(app);

app.listen(8000, () =>{
     console.log("the port is listiening on port 8000")

})