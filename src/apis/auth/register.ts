import { RegisterErrorResponse, RegisterPayload, RegisterSuccessResponse } from "../../types/api-responses/RegisterApiResponse";
import axiosInstance from "../../utils/axiosInstance"

export const register = async (credentials: RegisterPayload): Promise<RegisterSuccessResponse> => 
{
    return await axiosInstance()
        .post(`/auth/register`, credentials)
        .then((response: { data: RegisterSuccessResponse }) => response.data)
        .catch((error: { response: { data: RegisterErrorResponse } }) => Promise.reject(error.response.data));
}