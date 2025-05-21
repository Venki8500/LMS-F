import { useEffect } from 'react';
import './App.css';
import { Outlet, useNavigate } from 'react-router';
import Nav from './components/Nav';
import UserNav from './components/UserNav';
import ManagerNav from './components/ManagerNav';
import AdminNav from './components/AdminNav';

function App() {
  var navigate=useNavigate()

  useEffect(function(){
    var role=window.localStorage.getItem("role")
    var token=window.localStorage.getItem("token")
    if(token){
      if(role==="user"){
        navigate("/dashboard")
      }
      else{
        if(role==="manager"){
          navigate("/managerdashboard")
        }
        else{
          if(role==="admin"){
            navigate("/admindashboard")
          }
          else{
            navigate("/login")
          }
        }
      }
     
    }
  },[navigate])


  function Navbar(){
      var token=window.localStorage.getItem("token")
      var role=window.localStorage.getItem("role")
      if(!token){
        return(<Nav></Nav>)
      }
      if(role==="user"){
        return(<UserNav></UserNav>)
      }
      if(role==="manager"){
        return(<ManagerNav></ManagerNav>)
      }
      if(role==="admin"){
        return(<AdminNav></AdminNav>)
      }
    }
   
 
  return (
   <div>
    {Navbar()}
      <Outlet></Outlet>
   </div>
  );
}

export default App;
