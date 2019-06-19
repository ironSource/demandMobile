export interface User {
    token: string;
    isAdmin: boolean;
    user_email: string;
    loginAs?: string;
}
