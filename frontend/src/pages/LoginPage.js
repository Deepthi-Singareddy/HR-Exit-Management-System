import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function LoginPage(){

  const [form, setForm] = useState({
    email:"",
    password:""
  });
const navigate = useNavigate();
  const login = async () => {

    try{

      const res = await api.post(
        "/auth/login",
        form
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");

    }catch(error){

      alert("Invalid Credentials");
    }
  };

  return (

    <div style={{padding:"30px"}}>

      <h1>Login</h1>

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

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default LoginPage;