import express, { json } from "express";
import axios from "axios";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res)=>{
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any",{
            params:{
                type: "twopart"
            }
        });
        console.log(JSON.stringify(result.data));
        const data = {
            setup: JSON.stringify(result.data.setup),
            delivery: JSON.stringify(result.data.delivery)
        }
        res.render("index.ejs", data);
    } catch (error) {
        res.status(404);
    }
    });

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});