// src/services/product-service.js
var axios = require('axios')

module.exports = {
    getProductWeight: async function(productId) {
      // Meanwhile it can be implemented by other developers
      /*
      return axios
      .get('https://product.service:8899/products/' + productId)
      .then(response => {
        return response.data.weightLB
      })
      */

     let URL = process.env.MICROS_PRODUCTS_URL || 'product.service:8899/products';
     return axios
       .get(`https://${URL}/${productId}`)
      // return axios
      // .get('https://product.service:8899/products/' + productId)
      .then(response => {
        if (response.data && !Number.isNaN(parseFloat(response.data.weightLB))) {
          return response.data.weightLB
        } else {
          return Promise.reject('Invalid response object')
        }
      })
      .catch( (err) => {
        throw new Error(err)
      })
    }
}