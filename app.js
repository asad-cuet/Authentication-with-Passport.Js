const express=require('express');
const app=express();

app.set('view engine','ejs');


app.get('/',(reqi,res)=>{
    res.render('home');
});

app.listen(3000,()=>{
    console.log('app running on 3000');
})