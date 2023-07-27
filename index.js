// const express = require("express");
// const bodyParser = require("body-parser");
// const itemRoutes = require("./routes/items");


// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// app.use("/items", itemRoutes);

// app.use("/", (req, res) => {
//   // res.json(itemData);
//   res.sendStatus(408)
// });

// app.listen(port, () => {
//   console.log(`Server started at port http://localhost:${port}`);
// });


const express = require("express");
const fs = require("fs");
    
const app = express();
// const jsonParser = express.json();
  
app.use(express.static(__dirname + "/public"));
  
const filePath = "users.json";
app.get("/api/users", function(req, res){
       
    const content = fs.readFileSync(filePath,"utf8");
    const users = JSON.parse(content);
    res.send(users);
});
 
app.listen(3001);