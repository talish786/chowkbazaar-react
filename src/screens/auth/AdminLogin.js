import React from 'react'
import { useState,useEffect } from 'react'
import {useAuthLoginMutation} from '../../store/services/authService';
import { setAdminToken } from '../../store/reducers/authReducer';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
const AdminLogin = () => {

  const navigate = useNavigate();
  const [state,setState] = useState({
    email:'',
    password:''
  })

  const handleInputs = e =>{
    setState({...state , [e.target.name]:e.target.value });
  }

  const [login,response] = useAuthLoginMutation();
  const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
  console.log("my response",response)
  const adminLoginFunction = e =>{
    e.preventDefault();
    login(state);
    console.log("Sign in");
  }

  const dispatch = useDispatch();

  useEffect(()=>{
    if(response.isSuccess){
      localStorage.setItem('admin-token',response?.data?.token);
      dispatch(setAdminToken(response?.data?.token));
      navigate('/dashboard/home');
    }
  },[response.isSuccess,dispatch, navigate, response?.data?.token]);
  return (
    <>
      <div className="bg-black1 h-screen flex justify-center items-center">
        <form className="bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 rounded" onSubmit={adminLoginFunction}>
          <h3 className="mb-4 text-white capitalize font-semibold text-lg">Admin Dashboard</h3>
          {errors.length > 0 && errors.map((error, key) => (
                   <div key={key}>
                       <p className="alert-danger">{error.msg}</p>
                   </div>
             )) }
          <div className="mb-4">
            <input type="email" name="email" className="w-full bg-black1 p-3 rounded outline-none text-white" placeholder="Enter Email" onChange={handleInputs} value={state.email} />
          </div>
          <div className="mb-4">
            <input type="password" name="password" className="w-full bg-black1 p-3 rounded outline-none text-white" placeholder="Enter Password" onChange={handleInputs} value={state.password} />
          </div>
          <div className="mb-4">
            <input type="submit" className="w-full bg-indigo-600 p-4 rounded outline-none text-white cursor-pointer uppercase font-semibold" value="sign in &rarr;"/>
          </div>
        </form>
    </div>
    </>
  )
}

export default AdminLogin;