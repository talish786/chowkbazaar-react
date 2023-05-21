import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
const adminStorageToken = localStorage.getItem('admin-token');

function verifyToken(){
  if(adminStorageToken){
    const decodedToken  = jwtDecode(adminStorageToken);
    const expiresIn = new Date(decodedToken.exp * 1000);
    if(new Date() > expiresIn){
      localStorage.removeItem('admin-token');
      return null;
    }else{
      return adminStorageToken;
    }
  }else{
    return null;
  }
}
const authReducer = createSlice({
  name: 'authReducer',
  initialState: {
    adminToken: verifyToken(),
  },
  reducers: {
    setAdminToken: (state, action) => {
      state.adminToken = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('admin-token');
      state.adminToken = null;
    },
  },
});

export const { setAdminToken,logout } = authReducer.actions;

export default authReducer.reducer;
