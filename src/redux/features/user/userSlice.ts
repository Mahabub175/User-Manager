import { TUserData } from "@/utils/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  user: TUserData[];
};

const initialState: TInitialState = {
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
