const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Test express routing')
})

module.exports = router