import React, { useState} from 'react'
import LoginHeader from './LoginHeader'
import Footer from './Footer'
import { validCredential } from '../Service/EmployeeService'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const specificyHomepage = (role) => {
        if (role.toLowerCase() === 'manager')
            navigate("/mhome");
        else
            navigate("/ehome");
    }

    const loginEmployee = async (e) => {
        e.preventDefault();
        try{
           const credential = [email,password];
           const response = await validCredential(credential);
           console.log(response.data);
           const emp = response.data;
           sessionStorage.setItem("id",emp.empid);
           sessionStorage.setItem("role",emp.role);
           specificyHomepage(emp.role);
        }catch(error){
            alert("Bad Credential");
        }}
        

    

  return (
    <div>
        <LoginHeader></LoginHeader>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className='container' style={{ marginTop: '-160px',width:'500px'}}>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center'>Login</h2>
                    <div className='card-body'>
                        <form >
                            <div className='form-group mb-2'>
                        <label className='form-label'>Email : </label>
                        <input type='text'
                        placeholder='Please Enter The Email'
                        name='email'
                        value={email}
                        className='form-control'
                        onChange={(e)=> setEmail(e.target.value)}>
                        </input>
                        </div>

                        <div className='form-group mb-2'>
                        <label className='form-label'>Password : </label>
                        <input type='password'
                        placeholder='Please Enter The Password'
                        name='password'
                        value={password}
                        className='form-control'
                        onChange={(e)=> setPassword(e.target.value)}>
                        </input>
                        </div>

                        </form>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <button className='btn btn-success' onClick={loginEmployee}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Login