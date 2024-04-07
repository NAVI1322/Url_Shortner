
import express from "express"
import router from './routes/index.js';
import cors from "cors"

const app = express();
const port = 3000;

app.use(express.json());

// Mounting the main route handler at the /api/v1 path
app.use('/api/v1', router);

// Starting the server and listening for incoming requests on port 3000
app.listen(port, () => console.log(`Server up at ${port}`));
