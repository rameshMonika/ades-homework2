//sanity check
console.log("--------------------------------------");
console.log("Homework> week2> backend> server.js");
console.log("--------------------------------------");

// --------------------------
//imports
//---------------------------
const app = require('./controller/app');

// --------------------------
//configurations
//---------------------------
const hostname = "localhost";
const port = 3000;




// --------------------------
//main
//---------------------------


//standard for express
app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});