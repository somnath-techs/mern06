// app.get('/:id',(req,res)=>{
//     console.log(req)
//     res.send("this is home page")

// })
// app.get('/profile/:user',(req,res)=>{
//     console.log(req.params)
//     res.send(`this is profile page ${req.params.user}`)
// })
let products = [
  {
    id: 1,
    name: "mobile",
    price: 1000,
    img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "laptop",
    price: 2000,
    img: "https://images.unsplash.com/photo-1604684768394-52a862c2955a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHAlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "tv",
    price: 3000,
    img: "https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHR2fGVufDB8fDB8fHww",
  },
];
const home = (req, res) => {
  // res.send("<h1>this is home page</h1>")
  res.render("index2", { products: products });
};
const Registration = (req, res) => {
  const data = req.body;
  console.log(req.body);
  res.status(201).json({ msg: "this is Registration page", success: true });
};
const profile = (req, res) => {
  res.send(`this is profile page ${req.params.user}`);
};
module.exports = { home, profile, Registration };
