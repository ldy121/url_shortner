import console from 'console'
import express from 'express'
import urlShortner from './urlShortner'

export default async function startServer() {
    const app = express();
    
    app.get('/', (req, res) => {
        if (req.query.key) {
            let addr = urlShortner.instance.getUrl(req.query.key);
            if (addr) {
                if (!addr.includes('http://') && !addr.includes('https://')) {
                    addr = 'http://' + addr;
                }
                res.redirect(addr);
            } else {
                res.status(403).send('it requires valid key value to redirect');
            }
        } else {
            res.status(403).send('it requires key value to redirect');
        }
    });
    
    app.get('/req', (req, res) => {
        if (req.query.addr) {
            const key = urlShortner.instance.generateKey(req.query.addr);
            res.json({key: key});
        } else {
            res.status(403).send('it requires address to generate key');
        }
    });

    const port = process.env.PORT || '8080';

    return new Promise((resolve, ) => {
        const serverStop = () => {
            server.close();
            console.log(`server stop port number : ${port}`)
            return 0;
        };        
        const server = app.listen(port, () => {
            console.log(`server start port number : ${port}`)
            resolve(serverStop);
        });
    });
}