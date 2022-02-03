import Axios, { AxiosInstance } from 'axios'
import { AxiosHeaderConfig } from '../types/axiosHeaderConfig';

const axiosInstance = (): AxiosInstance => 
{
    const headers: AxiosHeaderConfig = {
        Authorization: ''
    };

    const axiosInstance = Axios.create({
        baseURL: "https://fakestoreapi.com/products",
        headers
    });

    axiosInstance
        .interceptors
        .response
        .use(
            response => response, // Promise.resolve(response)
            error => {
                switch (error.response.status) 
                {
                    case 401:
                        alert('Unauthorized access');
                        break;

                    case 403:
                        alert('FORBIDDEN')
                        break;

                    case 500:
                        alert('Something went wrong in the server');
                        break;            
                }

                return Promise.reject(error);
            }
        );

    return axiosInstance;
}

export default axiosInstance;