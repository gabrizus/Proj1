const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const fs = require('fs');

const app = express();

// set ejs as templating engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//serve static files (like CSS) from public
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req,res) => {
  const imagesDir = path.join(__dirname, "public", "imgs");
  const imageFiles = fs.readdirSync(imagesDir).filter(file => 
  /\.(png|jpe?g|gif|webp)$/i.test(file)
  );

  const images = imageFiles.map(file => ({
    url: `/imgs/${file}`,
    alt: path.parse(file).name 
  }));


  res.render('index',{images});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});  
