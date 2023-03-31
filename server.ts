import express from "express"
const app = express()
const port = 1991

app.use(express.json()) // to get body from client (body = data from client);
app.use(express.static("public")); // express knows static files exist on public folder

const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1280px-Cat_August_2010-4.jpg",
 "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Felis_catus-cat_on_snow.jpg/1280px-Felis_catus-cat_on_snow.jpg",
 "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"]

app.get("/api/images", (req, res) => {
    console.log(req.body)
        const imageSrc = images[getRandomNumber()]
        res.send({imageSrc: imageSrc})
})

function getRandomNumber() {
    return Math.round(Math.random() * 2)
}

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})