const express = require("express");
const mainRoute = require('./routes');
const cors = require("cors"); 

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Mounting the main route handler at the /api/v1 path
app.use('/api/v1', mainRoute);

// Starting the server and listening for incoming requests on port 3000
app.listen(port, () => console.log(`Server up at ${port}`));
