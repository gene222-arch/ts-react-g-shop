export type User = {
    id: number,
    name: string,
    email: string,
    password: string,
    picture?: { // response from facebook
        data: {
          height?: number | undefined,
          is_silhouette?: boolean | undefined,
          url?: string | undefined,
          width?: number | undefined,
      },
    } | undefined;
};

export type AuthState = 
{
    isAuthenticated: boolean,
    user: User,
    isLoading: boolean,
    error: any
};