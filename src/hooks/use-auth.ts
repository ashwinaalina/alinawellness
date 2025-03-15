"use client"

import { useEffect, useState } from "react"
import { authClient } from "@/utils/auth-client"
import { useRouter } from "next/navigation";

export function useAuth() {
const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const session = await authClient.getSession()
      if (session.data) {
        setIsAuthenticated(true);
        setUserName(session.data.user.name);
        setUserEmail(session.data.user.email);
        setUserImage(session.data.user.image ?? "");   
      }
    }
    checkAuth()
  }, [])

  const signOut = async () => {
    await authClient.signOut();
    setIsAuthenticated(false);
    setUserName("");
    setUserEmail("");
    setUserImage("");   
}

  return {
    signOut,
    isAuthenticated,
    userName,
    userEmail,
    userImage,
  }
}