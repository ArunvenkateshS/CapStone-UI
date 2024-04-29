import axios from "axios"

const REST_API_BASE_URI = "http://localhost:8080/employees"

export const listEmployee = () => {
    return axios.get(REST_API_BASE_URI);
}

const REST_API_VALIDATION_URI = "http://localhost:8080/login"

export const validCredential = (credential) => {
    return axios.post(REST_API_VALIDATION_URI,credential);
}

const REST_API_PENDING_URI = "http://localhost:8080/pending"

export const getPendingList = () => {
    return axios.get(REST_API_PENDING_URI);
}

const REST_API_EXPENSE_URI = "http://localhost:8080/expense/";

export const getexpense = (empId) => {
    return axios.get(REST_API_EXPENSE_URI + empId);
}

export const updateAccept = (expenseId, expense) => {
    return axios.put("http://localhost:8080/expense/" + expenseId, expense);
}

export const getExpenseDetail = (empId) => {
    return axios.get("http://localhost:8080/expensedetail/" + empId);
}

export const updateExpenseDetail = (empId,expenseDetail) => {
    return axios.put("http://localhost:8080/expensedetail/" + empId,expenseDetail);
}

export const getEmployee = (empId) => {
    return axios.get("http://localhost:8080/employee/" + empId);
}