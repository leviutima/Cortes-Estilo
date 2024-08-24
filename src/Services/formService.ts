import axios from "axios"

export interface FormData {
    nome: string;
    telefone: string;
    email: string;
    mensagem: string;
}

export const submitForm = async (formData: FormData): Promise<void> => {
    try {
        await axios.post('http://localhost:8080/Usuario', formData)
    } catch (error) {
        console.error ('erro ao enviar dados', error)
        throw error
    }
}