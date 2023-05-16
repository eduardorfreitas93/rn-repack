export interface UserProps {
    nome?: string;
    setName: (value: string) => void;
}

const user = set => ({
    nome: undefined,
    setName: (value: string) => {
        set({ nome: value });
    },
});

export default user;
