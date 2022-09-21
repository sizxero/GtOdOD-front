import { authInstance } from './AxiosInstance';

const API = {
    findAllCategories: async () => {
        try {
            const res = await authInstance.get(`/ctg`);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    addCategory: async (data) => {
        try {
            const res = await authInstance.post(`/ctg`, data);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;