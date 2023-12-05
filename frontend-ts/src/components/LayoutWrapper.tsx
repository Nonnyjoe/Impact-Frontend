import React from "react";

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="max-w-8xl mx-auto 3xl:max-w-9xl px-6">{children}</div>;

export default LayoutWrapper;
