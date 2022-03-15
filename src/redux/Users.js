import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },

  addUser: (state, action) => {},
});

export default userSlice.reducer;
