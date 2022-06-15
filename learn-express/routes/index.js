const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
    res.send('나는 INDEX 페이지');
});

module.exports = router;