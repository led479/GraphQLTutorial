const fetch = require('node-fetch');

const getProducts = async() => {
  const res = await fetch(process.env.PRODUCTS_URL)
  return res.json()
}

const getProduct = async(product) => {
  const products = await getProducts()
  return products.find(p => p.id == product)
}

const getReviews = async() => {
  const res = await fetch(process.env.REVIEW_URL)
  return res.json()
}

module.exports = {
  getProducts,
  getReviews,
  getProduct
}