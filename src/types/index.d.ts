export interface User {
    id: number;
    fullName: string;
    phone: string;
    address: string;
    score: number;
}

export interface Post {
    id: number;
    user: User;
    title: string;
    body: string;
}