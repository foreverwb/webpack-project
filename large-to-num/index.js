if (process.env.NODE_ENV === 'production') {
  console.log('production')
  module.exports = require('./dist/large-to-num.min.js');
} else {
  console.log('development')
  module.exports = require('./dist/large-to-num.js');
}