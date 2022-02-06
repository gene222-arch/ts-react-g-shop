import { BaseResponse } from "./BaseResponse";

export type RegisterPayload = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
};

export type RegisterSuccessResponse = BaseResponse & {
    data: {
        access_token: string,
        expired_at: string,
        token_type: string,
        data: {
            id: number,
            email: string,
            name: string
        }
    },
    message: string
};

export type RegisterErrorResponse = BaseResponse & {
    data: null,
    message: {
        name?: string,
        email?: string,
        password?: string,
        password_confirmation?: string
    }
};