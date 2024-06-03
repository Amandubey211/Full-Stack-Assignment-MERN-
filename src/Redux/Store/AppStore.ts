// AppStore.ts
import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "../Slice/FormSlice";
import AuthReducer from "../Slice/AuthSlice";
import UserReducer from "../Slice/UserSlice";

const AppStore = configureStore({
  reducer: {
    Form: FormReducer,
    Auth: AuthReducer,
    User: UserReducer,
  },
});

export type RootState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;

export default AppStore;
