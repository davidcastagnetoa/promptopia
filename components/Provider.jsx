'use client';

import { SessionProvider } from "next-auth/react";


// Use of the Provider is mandatory so that session data
const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;