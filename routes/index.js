var express = require('express');
var router = express.Router();

// Sends HTML and transpiled js to client.
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


module.exports = router;
