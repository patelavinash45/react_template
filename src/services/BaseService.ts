import axios from "axios";

const BASE_URL = import.meta.env.BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      return Promise.reject("Unauthorized");
    } else {
      return Promise.reject(error);
    }
  }
);

class API {
  get = async (url: string) => {
    return await axiosInstance.get(url);
  };

  post = async (url: string, data: any) => {
    return await axiosInstance.post(url, data);
  };

  put = async (url: string, data: any) => {
    return await axiosInstance.put(url, data);
  };
  delete = async (url: string) => {
    return await axiosInstance.delete(url);
  };
}

export const api = new API();
