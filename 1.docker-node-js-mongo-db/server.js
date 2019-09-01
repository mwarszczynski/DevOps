const express = require('express');
const app = express();
const router = express.Router();

const port = 8082
const path = __dirname + '/views/';


router.use(function (req, res, next) {
    console.log('/', + req.method);
    next();
});

router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/sharks', function (req, res) {
    res.sendFile(path + 'sharks.html');
});


app.use(express.static(path));
app.use('/', router);

app.listen(port, function() {
    // console.log('This app is listening on port 8082!\n')
    console.log(`App is listening on port ${PORT}`);
});
