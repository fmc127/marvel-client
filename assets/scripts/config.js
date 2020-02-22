'use strict'

let apiUrl
const apiUrls = {
  production: 'https://dashboard.heroku.com/apps/marvel-database',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}