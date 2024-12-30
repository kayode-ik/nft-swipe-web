"use client"; // This is critical to make it a Client Component

import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store"; // Adjust the path as needed

type Props = {
  children: React.ReactNode;
};

const ClientProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
