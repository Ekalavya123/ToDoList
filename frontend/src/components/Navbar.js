import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
  const navigate= useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/Login")
  }
  return (
    <nav class="navbar navbar-expand-lg  header">
    <div class="container-fluid">
      <Link class="navbar-brand m-3" to="/">ToDoList</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        {(localStorage.getItem('token'))?
          <div class="d-flex">
            <Link class="btn btn-outline-white" to="/About">profile</Link>
            <button class="btn btn-outline-white" onClick={handleLogout}>LogOut</button>
          </div>:
          <div class="d-flex">
          <Link class="btn btn-outline-white" to="/Login">Login</Link>
          <Link class="btn btn-outline-white" to="/SignUp">SignUp</Link>
        </div>
        }
      </div>
    </div>
    </nav>
  )
}







