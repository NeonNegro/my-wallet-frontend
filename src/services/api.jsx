import axios from "axios";


const BASE_URL = 'http://localhost:5000';


function createHeader(token){
    return {headers: {Authorization: `Bearer ${token}`}};
}

function signUp(body) {
    return axios.post(`${BASE_URL}/auth/sign-up`, body);
}

function signIn(body){
    return axios.post(`${BASE_URL}/auth/sign-in`, body);
}

function signOut(token){
    const config = createHeader(token);
    return axios.delete(`${BASE_URL}/auth/sign-out`, config);
}

function createNewIncome(body, token){
    const config = createHeader(token);
    return axios.post(`${BASE_URL}/cash/newIncome`, config);
}

const api = {
    signUp,
    signIn,
    signOut,
    createNewIncome,
}

export default api;