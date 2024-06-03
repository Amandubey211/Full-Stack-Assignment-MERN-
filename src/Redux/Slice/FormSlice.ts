import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
  name: "Form",
  initialState: {
    isLoginPage: true,
  },
  reducers: {
    setisLoginPage: (state, action) => {
      state.isLoginPage = action.payload;
    },
  },
});

export const { setisLoginPage } = FormSlice.actions;

export default FormSlice.reducer;
