const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = Number(a) + Number(b);
  res.json({ result });
});

module.exports = router;