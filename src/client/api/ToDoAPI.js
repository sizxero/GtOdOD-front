import { authInstance } from './AxiosInstance';
import { getCookie } from '../Cookie';

const API = {
    findAllToDo: async (date) => {
        try {
            const res = await authInstance.get(`/todo?date=${date}`);
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
        console.log(data.no);
        try {
            const res = await authInstance.delete(`/todo?no=${data.no}`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;