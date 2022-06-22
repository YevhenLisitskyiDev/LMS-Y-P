import { useState, useEffect } from "react";
import { Subject } from "subjecto";
import supabase from "../services/supabase";
import demo from "./demo";
import setUserData from "./../services/setUserData";
import createNewUser from "./../services/createNewUser"
import isAdminCheck from "./../services/isAdminCheck"
import config from "./../config"

// define hook function
Subject.prototype.hook = function () {
  const [value, setValue] = useState(this.value);
  useEffect(() => this.subscribe(setValue).unsubscribe, []);
  return value;
};

const store = {
  auth: {
    session: new Subject<any>(supabase.auth.session()),
    signUp: async (data: { email: string; password: string }) => {
      const res = await supabase.auth.signUp(data);
    //   console.log(res.user, res.session, res.error);
      if (!res.error) {
        store.auth.session.next(res.session);
        createNewUser()
        return true;
      }
      return false;
    },
    signIn: async (data: { email: string; password: string }) => {
      const res = await supabase.auth.signIn(data);
    //   console.log(res.user, res.session, res.error);
      if (!res.error) {
        store.auth.session.next(res.session);
        setUserData();
        return true;
      }

      return false;
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();

      if (!error) {
        store.user.next(null);
      }
    },
  },
  user: new Subject<any>(null),
  isAdmin: new Subject<boolean>(false),
  test: new Subject<number>(0),
  demo,
};

supabase.auth.onAuthStateChange(async (event, session) => {
  store.auth.session.next(session);
  console.log("session state changed")
});

export default store;
