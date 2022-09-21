import { authInstance } from './AxiosInstance';
import { getCookie } from '../Cookie';

const API = {
    findAllToDo: async () => {
        try {
            const res = await authInstance.get(`/todo`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    addToDo: async (data) => {
        try {
            const res = await authInstance.post(`/todo`, data);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    editToDo: async (data) => {
        try {
            const res = await authInstance.put(`/todo`, data);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    deleteToDo: async (data) => {
        try {
            const res = await authInstance.delete(`/todo`, data);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;