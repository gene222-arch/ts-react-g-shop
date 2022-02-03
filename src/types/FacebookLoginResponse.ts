type FacebookPicture = {
    height: number,
    is_silhouette: boolean,
    url: string,
    width: number,
};

export type FacebookLoginResponse = {
    accessToken: string,
    data_access_expiration_time: number,
    email: string,
    expiresIn: number,
    // graphDomain: "facebook",
    id: string,
    name: string,
    picture: FacebookPicture,
    signedRequest: string,
    userID: string
};