import Taro from "@tarojs/taro";
import getBaseUrl from "./baseUrl";
import interceptors from "./interceptors";

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

class httpRequest {
  baseRequest(params, method = "GET") {
    const { url, data } = params;
    const BASE_URL = getBaseUrl(url);
    const contentType = params.contentType || "application/json";
    const option = {
      url: BASE_URL + url,
      data,
      method,
      header: {
        "content-type": contentType,
        Authorization: Taro.getStorageSync("Authorization")
      }
    };
    return Taro.request(option);
  }

  get(url, data = "") {
    let option = { url, data };
    return this.baseRequest(option);
  }

  post(url, data, contentType) {
    let params = { url, data, contentType };
    return this.baseRequest(params, "POST");
  }

  put(url, data = "") {
    let option = { url, data };
    return this.baseRequest(option, "PUT");
  }

  delete(url, data = "") {
    let option = { url, data };
    return this.baseRequest(option, "DELETE");
  }
}

export default new httpRequest();
