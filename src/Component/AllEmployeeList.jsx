import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { listEmployee } from '../Service/EmployeeService'



const AllEmployeeList = () => {
    const [employees,setEmployees] = useState([])

    useEffect(()=>{listEmployee()
    .then(Response =>{setEmployees(Response.data);})
    .catch(error => {console.error(error);})} , [])


  return (
    <div>
   <Header></Header>
    <div className='container'>
        <h2 className='text-center'>All Employee List</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee Role</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>{
                employees.map((employee)=>
                <tr>
                    <td>{employee.empid}</td>
                    <td>{employee.empName}</td>
                    <td>{employee.role}</td>
                    <td>{employee.email}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default AllEmployeeList