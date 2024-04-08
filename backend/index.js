import express from "express"
import cors from 'cors'

import authRoute from "./routes/authRoute.js"
import urlRoute from "./routes/urlRoute.js"

const app = express();
app.use(cors());

const port = 3000;

app.use(express.json());

app.use('/api/v1/auth', authRoute);
app.use('/api/v1', urlRoute);

app.listen(port, () => console.log(`Server up at ${port}`));