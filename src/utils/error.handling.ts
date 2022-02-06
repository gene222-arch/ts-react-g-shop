export const getErrorMessage = (error: any) => 
{
    if (error instanceof Error) {
        return error.message;
    }

    return error;
}