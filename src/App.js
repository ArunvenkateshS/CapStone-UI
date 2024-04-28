import React from 'react'
import ManagerHome from './Component/ManagerHome'
import {Routes,Route} from 'react-router-dom'
import AllEmployeeList from './Component/AllEmployeeList'
import Login from './Component/Login'
import Ehome from './Component/Ehome'
import SignupPage from './Component/SignupPage'
import EmployeeExpList from './Component/EmployeeExpList'
import Header from './Component/Header'
import PendingList from './Component/PendingList'
import Welcome from './Component/Welcome'
import AddExpense from './Component/AddExpense'



const App = () => {
  return (
   <div className='container'>
    <Routes>
      <Route path ="/mhome" element={<ManagerHome/>}></Route>
      <Route path ="/employees" element={<AllEmployeeList/>}></Route>
      <Route path='/ehome' element={<Ehome></Ehome>}></Route>
      <Route path ="/login" element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignupPage></SignupPage>}></Route>
      <Route path='/expensetable' element={<EmployeeExpList></EmployeeExpList>}></Route>
      <Route path='/header' element={<Header></Header>}></Route>
      <Route path='/pendinglist' element={<PendingList></PendingList>}></Route>
      <Route path='/' element={<Welcome></Welcome>}></Route>
      <Route path='/addexpense' element={<AddExpense></AddExpense>}></Route>
    </Routes>
   </div>
  )
}

export default App