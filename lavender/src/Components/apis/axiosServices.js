import axios from "axios";

class AxiosServices {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }
  handleSuccess(response) {
    return response;
  }
  handleError(error) {
    return Promise.reject(error);
  }
  get(url) {
    return this.instance.get(url);
  }
  getImage(url) {
    return this.instance.get(url, { responseType: "blob" });
  }
  post(url, data) {
    return this.instance.post(url, data);
  }
  put(url, data) {
    return this.instance.put(url, data);
  }
  delete(url) {
    return this.instance.delete(url);
  }
}
export default new AxiosServices();
