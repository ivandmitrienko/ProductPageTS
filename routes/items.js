// const express = require("express");
// const router = express.Router();
// const { v4 } = require("uuid");

// let itemData = [
//    {
//       "name": "Waffles",
//       "toppings": "strawberry",
//       "price": 200
//    }
// ];

// // router.get("/", (req, res) => {
// //   // res.json(itemData);
// //   res.sendFile(__filename + "/README.md")
// // });

// router.post("/", (req, res) => {
//   const item = req.body;
//   itemData.push({ ...item, id: v4() });
//   res.send(`Item "${item.name}" has been added successfully.`);
// });

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const itemFound = itemData.find((item) => item.id === id);
//   console.log(itemFound);
//   res.send(itemFound);
// });

// module.exports = router;