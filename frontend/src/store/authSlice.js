import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: null,
    otp: {
      phone: "",
      hash: "",
    },
  },
  reducers: {
    setOtp: (state, action) => {
      const { phone, hash } = action.payload;

      state.otp.phone = phone;
      state.otp.hash = hash;
    },
    setAuth: (state, action) => {
       const {newUSer} = action.payload;
       state.user = newUSer
        state.isAuth = true
    }
  },
});

// Action creators are generated for each case reducer function
export const { setOtp,setAuth  } = authSlice.actions;

export default authSlice.reducer;
