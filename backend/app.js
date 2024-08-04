const express = require('express');
const mysql = require('mysql2');
//create connection 
require('dotenv').config();
const connectionString = 'mysql://root:tegMuavtxasVgxYVAqFPLBAwNfbgFXPa@roundhouse.proxy.rlwy.net:49684/railway'


var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Stru5932',
    database:'nodemysql'
});



// Connect 
db.connect( (err)=>{
    if(err){
        throw err;
    }
     console.log("Mysql conncted...")
    
})

const app  = express();

//createDb
app.get('/createdb',(req,res)=>{
    let sql  = 'CREATE DATABASE nodemysql';
    db.query(sql,(err,result)=>{
            if(err) throw err;
            console.log(result)
            res.send('database created...');
    })
})
//create table 
app.get('/createposttable',(req,res)=>{
    let sql ='CREATE TABLE posts (id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255),PRIMARY KEY (id))'; 
    db.query(sql,(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send('Posts table created...');
    })
});
//insert post1
app.get('/addpost2',(req,res)=>{
    let post = {title:'Post One',body:'ALD5PZ4'}
    let sql ='INSERT INTO posts SET ? '; 
    let query= db.query(sql,post,(err,result)=>{
        if(err) throw err;
            console.log(result)
            res.send('Post 1 added...');

    });
})
// Fetch all posts
app.get('/posts', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        console.log(results[0].title)
        res.json(results);
    });
});



app.listen('3000',()=>{
    console.log('server started on port 3000')
});

