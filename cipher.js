console.clear();
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456'
const iv = '1234567890123456';
console.log('key byte:', key.length);
console.log('iv byte:', iv.length);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('지영아 사랑해! 세상에서 제일 사랑해!', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);