import saveToken, { defaultInstance } from './AxiosInstance';

const API = {
    login: async (data) => {
        try {
            const res = await defaultInstance.post(`/user/login`, data);
            saveToken(res);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    signup: async (data) => {
        try {
            const res = await defaultInstance.post(`/user`, data);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    duplId: async(id) => {
        try {
            const res = await defaultInstance.get(`/user/id?str=${id}`);
            if(res.data)
                alert('사용 불가능한 아이디입니다.');
            else
                alert('사용 가능한 아이디입니다.');
            return res.data;
        } catch(e) {
            console.log(e);
        }
    },
    duplNick: async(nick) => {
        try {
            const res = await defaultInstance.get(`/user/nick?str=${nick}`);
            if(res.data)
                alert('사용 불가능한 닉네임입니다.');
            else
                alert('사용 가능한 닉네임입니다.');
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }
};

export default API;