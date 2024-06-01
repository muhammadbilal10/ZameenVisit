"use client";
import { createContext, useContext } from "react";

const SessionContext = createContext({
  user: {
    name: null,
    email: null,
    role: null,
    phoneNumber: null,
    image: null,
    id: null,
  },
  expires: null,
  iat: null,
  exp: null,
});

export const useSession = () => useContext(SessionContext);

export function AuthWrapper({
  children,
  value,
}: {
  children: React.ReactNode;
  value: any;
}) {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}
