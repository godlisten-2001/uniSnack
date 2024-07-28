import { create } from "zustand";

type AuthStoreState = {
  isloggedin: boolean;
  usertoken: string;
  user: {};
};

export const useAuthStore = create<AuthStoreState>((set) => ({
  isloggedin: true,
  usertoken: "",
  user: {
    userid: 1,
    username: "ruka",
    password: "abcd",
    phone: "0729393912",
  },
}));
// we have to create a function to check and update the state of the user token
