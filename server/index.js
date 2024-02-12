const   express = require('express')
const mongoose= require("mongoose");
const env= require("dotenv");
const app = express();
const pinRouter= require("./Routes/pins")
const userRoute= require("./Routes/user")
const port = 3000

env.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>{
    console.log("MONGO CONNECTED");
})
.catch(()=>{
    console.log("ERROR AT MONGO CONNECTION");
})

app.use("/pin",pinRouter);
app.use("/user", userRoute);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`server started at http://localhost:${port}`))