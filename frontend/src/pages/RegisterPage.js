import { useState } from "react";
import api from "../services/api";

function RegisterPage(){

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
    role:"Employee"
  });

  const register = async () => {

    try{

      await api.post(
        "/auth/register",
        form
      );

      alert("User Registered");

    }catch(error){

      alert("Error");
    }
  };

  return (

    <div style={{padding:"30px"}}>

      <h1>Register</h1>

      <input
      placeholder="Name"
      onChange={(e)=>
        setForm({
          ...form,
          name:e.target.value
        })
      }
      />

      <br /><br />

      <input
      placeholder="Email"
      onChange={(e)=>
        setForm({
          ...form,
          email:e.target.value
        })
      }
      />

      <br /><br />

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>
        setForm({
          ...form,
          password:e.target.value
        })
      }
      />

      <br /><br />

      <select
      onChange={(e)=>
        setForm({
          ...form,
          role:e.target.value
        })
      }
      >

        <option>Employee</option>
        <option>Manager</option>
        <option>HR Admin</option>

      </select>

      <br /><br />

      <button onClick={register}>
        Register
      </button>

    </div>
  );
}

export default RegisterPage;