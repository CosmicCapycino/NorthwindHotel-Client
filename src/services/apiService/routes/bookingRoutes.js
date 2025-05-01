export default class {
    constructor(axios) {
        this.axiosInstance = axios
    }

    async fetchAll() {
        return await this.axiosInstance.get('/fetch/all').then((res) => {
            return res.data;
        })
    }
}