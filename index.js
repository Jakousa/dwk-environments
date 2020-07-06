const fs = require('fs').promises
const express = require("express")
const app = express()
const port = 3000

const mustache = require('mustache')

const COLOR = "red"

app.get("/", async (req, res) =>{
  const template = await fs.readFile("index.mustache", "utf-8")
  res.send(mustache.render(template, { color: COLOR }))
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
