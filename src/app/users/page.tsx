"use client";
import UserContainer from "@/components/AllSection/Users/UserContainer";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center container mx-auto lg:py-20">
      <Provider store={store}>
        <div className="">
          <h1 className="text-3xl lg:text-5xl font-bold text-center px-5 lg:px-0 mt-20 lg:mt-0">
            Welcome to user manager!
          </h1>
          <div className="mt-20">
            <UserContainer />
          </div>
        </div>
      </Provider>
    </section>
  );
};

export default page;
