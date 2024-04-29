import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { getExpenseDetail, getPendingList, updateAccept, updateExpenseDetail } from '../Service/EmployeeService';

const PendingList = () => {

const [employeePendingList,setEmployeePendingList] = useState([]);
const [accept,setAccept] = useState(false);


useEffect(()=>{getPendingList()
    .then(Response =>{setEmployeePendingList(Response.data);})
    .catch(error => {console.error(error)})} , [accept])

const accecptRequest = async (expense) => {
    expense.status = "accepted";
    try{

    await updateAccept(expense.expenseId,expense);

    loopEffect();

    }catch(errror){
        alert("error");
    }
}    

const rejectRequest = async (expense) => {
    expense.status = "rejected";
    try{

    await updateAccept(expense.expenseId,expense);

    const response = await getExpenseDetail(expense.empId);
    const expenseDetail = response.data;

    
    console.log(expenseDetail);
    console.log(expense.expenseType);
    console.log(expense.amount);
    addIfRejected(expenseDetail,expense.expenseType,expense.amount); 
    
    await updateExpenseDetail(expenseDetail.empId,expenseDetail);
    
    loopEffect();
}

    catch(errror){
        alert("error");
    }
}

const loopEffect = () => {
    if (accept===false)
    setAccept(true);
    else
    setAccept(false);  
}

const addIfRejected = (expenseDetail,expenseType,amount) => {
    switch(expenseType) {
        case "medical":
            expenseDetail.medical += amount;
            console.log(expenseDetail.medical);
          break;
        case "travel":
            expenseDetail.travel += amount;
            console.log(expenseDetail.travel);
          break;
        case "internet":
            expenseDetail.internet += amount;
            console.log(expenseDetail.internet);
          break;
      }
}

  return ( 
    <div>
    <Header></Header>
    <div className='container'>
        <h2 className='text-center'>Employee's Requested List</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Role</th>
                    <th>Expense Type</th>
                    <th>Reason</th>
                    <th>Amount</th>
                    <th>Accept</th>
                    <th>Reject</th>
                    
                </tr>
            </thead>
            <tbody>{
                employeePendingList.map((pending)=>
                <tr>
                    <td>{pending.empId}</td>
                    <td>{pending.role}</td>
                    <td>{pending.expenseType}</td>
                    <td>{pending.reason}</td>
                    <td>{pending.amount}</td>
                    <td><button className='btn btn-success' onClick={()=>accecptRequest(pending)}>Accept</button></td>
                    <td><button className='btn btn-warning' onClick={()=>rejectRequest(pending)}>Reject</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default PendingList