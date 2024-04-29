import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import EmployeeHeader from './EmployeeHeader'
import { getEmployee } from '../Service/EmployeeService';

const Ehome = () => {
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
    <div>
      <EmployeeHeader></EmployeeHeader>
      <div><h3>{employee.empid}</h3>
      <h3>{employee.empName}</h3>
      <h3>{employee.role}</h3>
      <h3>{employee.email}</h3>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Ehome;
