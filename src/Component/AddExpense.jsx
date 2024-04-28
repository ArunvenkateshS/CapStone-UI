import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function AddExpense() {
    const [expenseType,setExpenseType]=useState('');
    const[reason,setReason]=useState('');
    const[amount,setAmount]=useState('');

    const navigate = useNavigate();

    const handleSubmit=async () => {
        const employeeId=sessionStorage.getItem('id');
        const role=sessionStorage.getItem('role');

        try{
            const response=await axios.post('http://localhost:8080/postall',{
                 amount,empId:employeeId,expenseType,reason,role,
                status:'pending'
            });
            
             handleSubmitTwo();
             alert("Successfully Sent, It Will Take 2 Bussiness Days To Know The Update :)")
        navigate("/expensetable");    
        }catch(error){
            console.error('posting expense',error)
        }
    };

    const handleSubmitTwo=async () => {

        const employeeId=sessionStorage.getItem('id');

        try{
            const response=await axios.post('http://localhost:8080/api/expenses',{
               empId:employeeId, expenseType,amount,reason,status:'pending'
            });
        }catch(error){
            console.error('error in posting',error);
        }


    };


  return (
    <div>
    <Header></Header>
    <div className='container'>
        <div className='row'>
            <div className='card'>
                <h2 className='text-center'>Request Expense</h2>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>

                    <div className='form-group mb-2'>
                    <label className='form-label'>Type : </label>
                   <select id="expensetype" name="expensetype" value={expenseType} onChange={(e) => 
                   setExpenseType(e.target.value)} required>
                    <option value="">Select</option>

                   <option value="medical">Medical</option>

                   <option value="travel">Travel</option>

                    <option value="internet">Internet</option>

                   </select>
                    </div>

                      <div className='form-group mb-2'>
                        <label className='form-label'>Reason:</label>
                        <input type='text'
                        placeholder='Please Enter The reason'
                        name='reason'
                        value={reason}
                        className='form-control'
                        onChange={(e)=> setReason(e.target.value)}>
                        </input>
                    
                    </div> 
                    <div className='form-group mb-2'>
                        <label className='form-label'>Amount:</label>
                        <input type='number'
                        placeholder='Please Enter The Amount'
                        name='amount'
                        value={amount}
                        className='form-control'
                        onChange={(e)=> setAmount(e.target.value)}>
                        </input>
                    
                    </div> 



                    </form>
                    <button className='btn btn-success' onClick={handleSubmit}>submit</button>
                </div>
            </div>
        </div>
                
    </div>
    <Footer></Footer>
</div>

  )

}
export default AddExpense;
