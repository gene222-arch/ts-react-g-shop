export type LoginPayload = {
    email: string,
    password: string
};

export type LoginSuccessResponse = {
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
    message: string,
    status: string,
    status_message: string
};

export type LoginErrorResponse = {
    data: null,
    message: {
        email?: string,
        password?: string
    },
    status: string,
    status_message: string
};