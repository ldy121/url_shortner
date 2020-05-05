import axios from 'axios'
import startServer from '../server/server'

test ('Test URL Shorter server', async () => {
    const stopServer = await startServer();
    const address = 'http://127.0.0.1:8080/req/';
    let response;

    await axios.get(address, {params: {addr : 'naver.com'}, responseType : 'json'}).then(res => response = res.data);
    stopServer();

    expect(response.key).toBe(0);
});