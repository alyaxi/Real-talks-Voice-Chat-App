import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:5500/api",
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
})


// list of end points

export const sendOtp = async (data) => await api.post('/send-otp',data);
export const verifyOtp = async (data) => await api.post('/verify-otp',data);

export default api
