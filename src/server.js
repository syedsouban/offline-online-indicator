const app = require("./app")
const port = 4000

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => console.log(`The server is listening on port ${port}`))