import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

// TODO: import a proper isAuthenticated function
const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export function IfAuthenticated({ children }) {
  return isAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated({ children }) {
  return !isAuthenticated() ? <>{children}</> : null
}
