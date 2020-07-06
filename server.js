const express = require("express");
const path = require("path");

// Server Settings
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json()) // Body parsing

// Routing Config
// require('./routes/routes')(app);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') { // Set static folder
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


// Start Node server and listen on port
app.listen(port, () => console.log("Node Server started on port: " + port))
