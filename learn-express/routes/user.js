const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
    res.send('나는 USER 페이지');
});

module.exports = router;