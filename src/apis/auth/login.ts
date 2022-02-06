import { LoginErrorResponse, LoginPayload, LoginSuccessResponse } from "../../types/api-responses/LoginApiResponse";
import axiosInstance from "../../utils/axiosInstance"

export const login = async (credentials: LoginPayload): Promise<LoginSuccessResponse> => 
{
    return await axiosInstance()
        .post(`/auth/login`, credentials)
        .then((response: { data: LoginSuccessResponse }) => response.data)
        .catch((error: { response: { data: LoginErrorResponse } }) => Promise.reject(error.response.data));
}