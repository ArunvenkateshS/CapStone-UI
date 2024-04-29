import React,{useState} from 'react';
import SimpleHeader from './SimpleHeader';
import Footer from './Footer';

const SignupPage=()=>{

    const[formData,setFormData]=useState({
        empName:'',
        password:'',
       
        role:'',
        email:''
        
    
    });
    // this method takes an event e as its parameter (e-event object)
    //setformstate updates form data state
    //handleChange func updates the formdata when user types in the textbox
    const handleChange=(e)=>{
        if(e.target.name==='role')
        {
            setFormData({ ...formData,[e.target.name]:e.target.value});
        }
        else{
        setFormData({ ...formData,[e.target.name]:e.target.value });
        }
    };


    const handleSubmit=async(e)=>{
        e.preventDefault();

        if( !validateEmail(formData.email)){
           
            alert('Invalid Email Format');
            return;
        }
        if( !validatePassword(formData.password)){
           
            alert('Invalid Password Format');
            return;
        }
        try{
            const response=await fetch('http://localhost:8080/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
            if(response.ok){
                window.location.href='./login';
            } else{
                console.error('signup failed');
            }
        } catch(error){
            console.error('Error',error);
        }
    };
    const validatePassword =(password) =>{
        const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        console.log(password);
        return passwordRegex.test(password);
    };
    const validateEmail=(email)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       
        return emailRegex.test(email);
    };

    return (
      <div>
      
      <SimpleHeader></SimpleHeader>
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <h2 className='text-center'>Sign Up</h2>
                    <div className='card-body'>
          <form >
          <div className='form-group mb-2'>
    <label for="fullname">Name : </label>
    <input type="text" id="fullname" name="empName" placeholder='Name' value={formData.empName} className='form-control'
    onChange={handleChange} required/></div>

<div className='form-group mb-2'>
    <label for="password">Password : </label>
    <input type="password" id="password" name="password" placeholder='password'value={formData.password} className='form-control'
    onChange={handleChange} required/></div>
 
 <div className='form-group mb-2'>
    <label for="role">Select Role : </label>
    
    <select id="role" name="role"  value={formData.role} placeholder='Select Role' className='btn-secondary dropdown-toggle'
    onChange={handleChange}>
      <option></option>
      <option value="employee">Employee</option>
      <option value="manager">Manager</option>


    </select></div>
    
    <div className='form-group mb-2'>
    <label for="email">Email : </label>

    <input type="email" id="email" name="email" value={formData.email} className='form-control'
    onChange={handleChange} required/></div>
 
            
            </form>
            <button className='btn btn-success' onClick={handleSubmit}>Sign Up</button>
           
                    </div>
                </div>
            </div>
                    
        </div>
        <Footer></Footer>
    </div>
      );
    }
     
    export default SignupPage;