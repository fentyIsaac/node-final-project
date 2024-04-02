const port = 8080; // We'll run the server on port 8080

// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MIDDLEWARE
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES


app.get('/', (req, res) => {
    res.render('home', {
       title: "My Home Page"
    });
  });

app.get("/dynamic-page.html", (req, res) => {
    const currentTime = new Date();
    res.send(`<h1>The current time is ${currentTime.toString()}</h1>`);
 });

 app.get('/contact-me', (req, res) => {
    res.render('contact', {
       title: "Contact Me"
    });
  });

  app.post('/contact-me', (req, res) => {
    res.send("<h1>TODO: Handle contact-me form posts</h1>" + JSON.stringify(req.body));
  });

    const {getBlogList, convertMarkdown} = require("./modules/markdown-helpers")
    const pathToBlogFolder = __dirname + '/blog/';

    app.get("/blog/:post", (req, res) => {
        try{
          const pathToFile = pathToBlogFolder + req.params.post + ".md";
          console.log("Markdown file: " + pathToFile);
          const obj = convertMarkdown(pathToFile);
          res.render('default-layout', {
             title: obj.data.title,
             content: obj.html
          });
        }catch(e){
          console.log(e);
          res.status(404).redirect("/404");
        }
      });
 
    
    
app.get("/blog/:post", (req, res) => {
    res.send("The <b>:post</b> param is set to: " + req.params.post)
});



app.get("/404", (req, res) => {
    res.status(404);
    res.render('default-layout', {
       title: "Page Not Found",
       content: "<h1>Sorry!</h1><h3>We can't find the page you're requesting.</h3>"
    });
  });


app.all('*', (req, res) => {
    res.status(404).redirect("/404");
  });

// START THE SERVER
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});