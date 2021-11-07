console.log("---------------------------------------------------------");
console.log("Homework> week2> controller >app.js");
console.log("---------------------------------------------------------");

//-------------------------------------------------------------------------
//imports
//-------------------------------------------------------------------------
const express = require('express');

//Create an instance of express
const app = express();

const bodyParser = require('body-parser');

var toDoList = require('../model/toDoList.js');


var cors = require('cors');


var urlencodedParser=bodyParser.urlencoded({extended:false});



//-------------------------------------------------------------------------
// Middleware functions
//-------------------------------------------------------------------------

/** 
 * @param {object} req 
 *  request object
 * @param {object} res  
 *  response object 
 * @param {function} 
 *  reference to the enxt function to call
 * 
 */


function printDebugInfo(req, res, next) {
    console.log();
    console.log("-----------------[Debug Info]----------");
    //console.log(`Servicing ${urlPattern}...`);
    console.log("Servicing" + req.url + " ..");

    console.log("> req.params:" + JSON.stringify(req.params));
    console.log("> req.body:" + JSON.stringify(req.body));
    // console.log("> req.myOwnDebugIssue:"+JSON.stringify(req.myOwnDebugInfo));
    console.log("-----------------[Debug Info Ends]----------");
    console.log();

    next();

}

// from bodyParser, we want to get 2 different kinds of parsers
// who are capable of parsing some kind of data coming in
// 1.URL Encoded Parser
// 2.JSON Parser
var urlEncodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//-------------------------------------------------------------------------
// MF configurations
//-------------------------------------------------------------------------
app.use(urlEncodedParser);
app.use(jsonParser);

app.options('*',cors());
app.use(cors());




//-------------------------------------------------------------------------
//endpoints-user
//------------------------------------------------------------------------





app.put('/todos/:id', printDebugInfo, function (req, res) {
  
    var id = req.params.id;
    var task = req.body.task;
    var difficulityLvl = req.body.difficulityLvl;
   
 

    toDoList.updateToDo(id, task, difficulityLvl , function (err, result) {
        if (!err) {
            var output={
                "success":true,
                "affected rows:":result.affectedRows,
                "changed rows":result.changedRows

            }
            res.send(output);
        }
        else {
            res.status(500).send("Some error");
        }
    });

});




app.get('/toDos/:id', printDebugInfo,function (req, res) {
   var id=req.params.id;

    toDoList.getToDo(id,function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            res.status(404).send("Not found");
        }
    });

});


app.delete('/todos/:id', printDebugInfo, function (req, res) {
  
    var id = req.params.id;
   
 

    toDoList.deleteToDo(id,function (err, result) {
        if (!err) {
            var output={
                "success":true,
                "affected rows:":result.affectedRows,
                "changed rows":result.changedRows

            }
            res.send(output);
        }
        else {
            res.status(500).send("Some error");
        }
    });

});





app.get('/toDos/', printDebugInfo,function (req, res) {

    toDoList.getToDos(function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            res.status(500).send("Some error");
        }
    });

});



app.post('/todos/', printDebugInfo,function (req, res) {
    // to extract data

   var task=req.body.task;
   var difficulityLvl=req.body.difficulityLvl;


    // call the addUser function at user.js
    toDoList.addToDo(task,difficulityLvl, function (err, result) {
        // if there is no error the userid is shown in postman
        if (!err) {
            var output = "done"

            console.log("result " + output)


            res.status(201).send(result);
        }
        // else shows internal error
        else {
            output = {
                "Error": "Internal sever issues"
            };
            res.status(500).send(output);
        }
    });
});






//default endpoint
app.get('/', (req, res) => {
    console.log("GET > '/' > Week 2 homework Active");

    res.status(200).send({
        "Result": "GET > '/' > Week 2 homework Active"
        });
    res.end();
});


app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })

module.exports = app;
