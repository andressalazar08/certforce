import { app } from "./app";
require("dotenv").config();


//create a server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is conected with port: ${process.env.PORT}`);
});


