import axios from "axios";


const BASE_URL = 'http://localhost:5000';


function createHeader(token){
    return {headers: {Authorization: `Bearer ${token}`}};
}

function config(token){
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

function getAllTransactions(token){
    const config = createHeader(token);
    return axios.get(`${BASE_URL}/cash/allTransactions`, config);
}

function createNewIncome(body, token){
    const config = createHeader(token);
    return axios.post(`${BASE_URL}/cash/newIncome`, body, config);
}

function createNewOutcome(body, token){
    const config = createHeader(token);
    return axios.post(`${BASE_URL}/cash/newOutcome`, body, config);
}

function deleteTransaction(id, token){
    return axios.delete(`${BASE_URL}/cash/deleteTransaction`,id, config(token));
}



const api = {
    signUp,
    signIn,
    signOut,
    getAllTransactions,
    createNewIncome,
    createNewOutcome,
    deleteTransaction,
}

export default api;