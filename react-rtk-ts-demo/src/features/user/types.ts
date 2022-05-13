export type User ={
    id: number;
    name: string;
}

export type InitialState = {
    loading: boolean;
    users: User[];
    error: string;
}
