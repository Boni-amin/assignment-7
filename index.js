// import app
const app = require("./app");

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const port = process.env.RUNNING_PORT || 5500;



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});