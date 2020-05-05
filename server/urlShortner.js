export default class urlShortner {
    static instance = new urlShortner();
    constructor() {
        this.m_addressMap = [];
    }
    getUrl(key) {
        return this.m_addressMap[key];
    }
    generateKey(addr) {
        const key = this.m_addressMap.length;
        this.m_addressMap.push(addr);
        return key;
    }
};