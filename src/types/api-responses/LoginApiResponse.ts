import { BaseResponse } from "./BaseResponse";

export type LoginPayload = {
    email: string,
    password: string
};

export type LoginSuccessResponse = BaseResponse & {
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

export type LoginErrorResponse = BaseResponse & {
    data: null,
    message: {
        email?: string,
        password?: string
    } | string
};