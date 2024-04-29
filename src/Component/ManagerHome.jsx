import React, { useEffect, useState } from 'react'
import ManagerHeader from './ManagerHeader'
import Footer from './Footer'
import { getEmployee } from '../Service/EmployeeService';




const ManagerHome = () => {

  const [employee, setEmployee] = useState([]);
  const empId = sessionStorage.getItem("id");

  useEffect(() => {
      getEmployee(empId)
        .then(response => {
          setEmployee(response.data);
        })
        .catch(error => {
          console.error('Error fetching employee data:', error);
        });
  }, []);

  return (
    <>
    <ManagerHeader></ManagerHeader>
    <div><h3>{employee.empid}</h3>
      <h3>{employee.empName}</h3>
      <h3>{employee.role}</h3>
      <h3>{employee.email}</h3>
      </div>
    <Footer></Footer>
    </>
  )
}

export default ManagerHome