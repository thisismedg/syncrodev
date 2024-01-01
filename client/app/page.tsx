import { UserButton } from "@clerk/nextjs";
import React from "react";

const App = () => {
  return <div><UserButton afterSignOutUrl="/" /></div>;
};

export default App;
