import React, { useEffect, useState } from 'react'
import ManagerHeader from './ManagerHeader'
import Footer from './Footer'
import { getEmployee } from '../Service/EmployeeService';
import User from '../../src/Component/User.jpg'
import { FaIdCard, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';



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
    <div><br /><br />
      <img src={User} alt="Your Image" style={{ width: '125px', height: '125px', borderRadius: '50%' , boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}} /> 
      <br /><br />
      <h4><FaIdCard /> {employee.empid}</h4>
      <h4><FaUser /> {employee.empName}</h4>
      <h4><FaBriefcase /> {employee.role}</h4>
      <h4><FaEnvelope /> {employee.email}</h4></div>
      <Footer></Footer>
    <Footer></Footer>
    </>
  )
}

export default ManagerHome