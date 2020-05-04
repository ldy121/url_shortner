import console from "console"
import express from "express"

export default function startServer() {
    const app = express();
    const port = 8080;
    
    app.get('/', (req, res) => {
        console.log(req.query);
        res.send('Hello World!')
    });
    
    app.get('/req', (req, res) => {
        console.log(req.query);
        res.redirect('http://naver.com')
    });
    
    app.listen(port, () => console.log('server start'));

    return 0;
}