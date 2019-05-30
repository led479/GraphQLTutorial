require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var graphqlHTTP = require("express-graphql")
const schema = require("./schema")

// var root = {
//   hello: () => {
//     return "Hello world!";
//   },
//   products: () => {
//     return getProducts();
//   }
// };

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))