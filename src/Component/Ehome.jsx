import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { FaIdCard, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import EmployeeHeader from './EmployeeHeader'
import { getEmployee } from '../Service/EmployeeService';
import User from '../../src/Component/User.jpg'

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
      <div><br /><br />
      <img src={User} alt="Your Image" style={{ width: '125px', height: '125px', borderRadius: '50%' , boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}} /> 
      <br /><br />
      <h4><FaIdCard /> {employee.empid}</h4>
      <h4><FaUser /> {employee.empName}</h4>
      <h4><FaBriefcase /> {employee.role}</h4>
      <h4><FaEnvelope /> {employee.email}</h4></div>
      <Footer></Footer>
    </div>
  );
};

export default Ehome;
