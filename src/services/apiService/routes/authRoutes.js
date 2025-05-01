export default class {
    constructor(axios) {
        this.axiosInstance = axios
    }

    async login(username, password) {
        var form = new FormData();
        form.append('username', username);
        form.append('password', password);
        return await this.axiosInstance.post('/auth/login', form).then((res) => {
            console.log(res.data);
            return res.data;
        })
    }
}