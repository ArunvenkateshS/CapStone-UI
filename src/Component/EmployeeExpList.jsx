import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { getExpenseDetail, getexpense, getpendingList } from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeExpList = () => {

    var empId = sessionStorage.getItem("id");
    if (!empId)
      empId = 0;

    const navigate = useNavigate();

    const [pendingList,setPendingList] = useState([]);
    const [expenseDetails,setExpenseDetails] = useState([]);

    useEffect(()=>{getexpense(empId)
        .then(Response =>{setPendingList(Response.data);})
        .catch(error => {console.error(error)});
        getExpenseDetail(empId)
        .then(Response=>{setExpenseDetails(Response.data);})
        .catch(error=>console.error(error))
        } , [])


  return (
    <div>
    <Header></Header>
    <div className='container'>
        <h2 className='text-center'>{sessionStorage.getItem('role')} Expense List</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Medical</th>
                    <th>Travel</th>
                    <th>Internet</th>
                </tr>
            </thead>
            <tbody>{
                <tr>
                    <td>{expenseDetails.medical}</td>
                    <td>{expenseDetails.travel}</td>
                    <td>{expenseDetails.internet}</td>
                    </tr>
                }
            </tbody>
            </table>

        <button className='btn btn-danger' onClick={()=>navigate("/addexpense")}>Add Expense</button><br></br>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Role</th>
                    <th>Expense Type</th>
                    <th>Reason</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>{
                pendingList.map((pending)=>
                <tr>
                    <td>{pending.empId}</td>
                    <td>{pending.role}</td>
                    <td>{pending.expenseType}</td>
                    <td>{pending.reason}</td>
                    <td>{pending.amount}</td>
                    <td>{pending.status}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default EmployeeExpList