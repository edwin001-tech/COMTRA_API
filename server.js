var express = require('express');  
var mysql = require('mysql');  
var bodyParser=require('body-parser');  

var urlencoderParser = bodyParser.urlencoded({extended:false});  

var app=express();  
var port = process.env.port||3000; 

//Mysql Connection  
var con = mysql.createConnection({  
    host:'localhost',  
    user:'root',  
    password:'password',  
    database:'COMTRA'  
})

//Api code here  
 // default route
 app.get('/', function (req, res) {
    return res.send( 'hello,welcome to COMTRA api' )
});
//Users API
//GET  
app.get('/Users',function(req,res){  
    var qry = "select * from Users";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows);  
        res.json(rows);  
    });  
});
//Users API 
//GET with id  
app.get('/Users/:id',function(req,res){  
    var qry = "select * from Users where id="+req.params.id;  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows[0]);  
        res.json(rows[0]);  
    });  
}); 
//POST  
app.post('/Users',urlencoderParser,function(req,res){  
    var qry = "insert into Users values("+parseInt(req.body.id)+",'"+req.body.name+"','"+req.body.email+"','"+req.body.city+"',"+parseInt(req.body.phone)+")";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Added.");  
        res.send("1 Row Added.")  
    });  
}); 
//PUT  
app.put('/Users/:id',urlencoderParser,function(req,res){  
    var qry = "update Users set name='"+req.body.name+"',email='"+req.body.email+"',city='"+req.body.city+"',phone="+parseInt(req.body.phone)+" where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Updated.");  
        res.send("1 Row Updated.")  
    });  
}); 
//DELETE  
app.delete('/Users/:id',function(req,res){  
    var qry = "delete from Users where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Removed.");  
        res.send("1 Row Removed.")  
    });  
}) 

//Products API

//GET  
app.get('/products',function(req,res){  
    var qry = "select * from products";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows);  
        res.json(rows);  
    });  
});
//Users API 
//GET with id  
app.get('/products/:id',function(req,res){  
    var qry = "select * from products where id="+req.params.id;  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows[0]);  
        res.json(rows[0]);  
    });  
}); 
//POST  
app.post('/products',urlencoderParser,function(req,res){  
    var qry = "insert into products values("+parseInt(req.body.id)+",'"+req.body.name+"','"+req.body.price+"','"+req.body.description+"')";    
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Added.");  
        res.send("1 Row Added.")  
    });  
}); 
//PUT  
app.put('/products/:id',urlencoderParser,function(req,res){  
    var qry = "update products set name='"+req.body.name+"',price='"+req.body.price+"',description='"+req.body.description+"' where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Updated.");  
        res.send("1 Row Updated.")  
    });  
}); 
//DELETE  
app.delete('/products/:id',function(req,res){  
    var qry = "delete from products where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Removed.");  
        res.send("1 Row Removed.")  
    });  
}) 

//Products Categories API
//GET  
app.get('/products_categories',function(req,res){  
    var qry = "select * from products_categories";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows);  
        res.json(rows);  
    });  
});

//GET with id  
app.get('/products_categories/:id',function(req,res){  
    var qry = "select * from products_categories where id="+req.params.id;  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows[0]);  
        res.json(rows[0]);  
    });  
}); 
//POST  
app.post('/products_categories',urlencoderParser,function(req,res){  
    var qry = "insert into products_categories values("+parseInt(req.body.id)+",'"+req.body.name+"')";    
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Added.");  
        res.send("1 Row Added.")  
    });  
}); 
//PUT  
app.put('/products_categories/:id',urlencoderParser,function(req,res){  
    var qry = "update products_categories set name='"+req.body.name+"' where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Updated.");  
        res.send("1 Row Updated.")  
    });  
}); 
//DELETE  
app.delete('/products_categories/:id',function(req,res){  
    var qry = "delete from products_categories where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Removed.");  
        res.send("1 Row Removed.")  
    });  
}) 

//Services API

//GET  
app.get('/services',function(req,res){  
    var qry = "select * from services";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows);  
        res.json(rows);  
    });  
});

//GET with id  
app.get('/services/:id',function(req,res){  
    var qry = "select * from services where id="+req.params.id;  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows[0]);  
        res.json(rows[0]);  
    });  
}); 
//POST  
app.post('/services',urlencoderParser,function(req,res){  
    var qry = "insert into services values("+parseInt(req.body.id)+",'"+req.body.name+"','"+req.body.price+"','"+req.body.description+"')";    
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Added.");  
        res.send("1 Row Added.")  
    });  
}); 
//PUT  
app.put('/services/:id',urlencoderParser,function(req,res){  
    var qry = "update services set name='"+req.body.name+"',price='"+req.body.price+"',description='"+req.body.description+"' where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Updated.");  
        res.send("1 Row Updated.")  
    });  
}); 
//DELETE  
app.delete('/services/:id',function(req,res){  
    var qry = "delete from services where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Removed.");  
        res.send("1 Row Removed.")  
    });  
}) 

//Services_categories API

//GET  
app.get('/services_categories',function(req,res){  
    var qry = "select * from services_categories";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows);  
        res.json(rows);  
    });  
});

//GET with id  
app.get('/services_categories/:id',function(req,res){  
    var qry = "select * from services_categories where id="+req.params.id;  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows[0]);  
        res.json(rows[0]);  
    });  
}); 
//POST  
app.post('/services_categories',urlencoderParser,function(req,res){  
    var qry = "insert into services_categories values("+parseInt(req.body.id)+",'"+req.body.name+"')";    
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Added.");  
        res.send("1 Row Added.")  
    });  
}); 
//PUT  
app.put('/services_categories/:id',urlencoderParser,function(req,res){  
    var qry = "update services_categories set name='"+req.body.name+"' where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Updated.");  
        res.send("1 Row Updated.")  
    });  
}); 
//DELETE  
app.delete('/services_categories/:id',function(req,res){  
    var qry = "delete from services_categories where id="+parseInt(req.params.id);  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Removed.");  
        res.send("1 Row Removed.")  
    });  
}) 

//Feedback API

//GET  
app.get('/feedback',function(req,res){  
    var qry = "select * from feedback";  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows);  
        res.json(rows);  
    });  
});

//GET with id  
app.get('/feedback/:id',function(req,res){  
    var qry = "select * from feedback where id="+req.params.id;  
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log(rows[0]);  
        res.json(rows[0]);  
    });  
}); 
//POST  
app.post('/feedback',urlencoderParser,function(req,res){  
    var qry = "insert into feedback values("+parseInt(req.body.id)+",'"+req.body.feedback+"')";    
    con.query(qry,function(err,rows){  
        if(err)  
            throw err;  
        console.log("1 Row Added.");  
        res.send("1 Row Added.")  
    });  
}); 


app.listen(port);  
console.log('Server is started on http://localhost:'+port); 

