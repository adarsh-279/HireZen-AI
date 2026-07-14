import { useContext, useEffect } from "react";
import { AuthContext } from "../services/auth.context.js";
import { login, register, logout, getMe } from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true);

      const data = await login({ email, password });

      setUser(data.user);
      return data;

    } catch (error) {
      console.error("Login error:", error);

    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    try {
      setLoading(true);

      const data = await register({ username, email, password });

      setUser(data.user);
      return data;

    } catch (error) {
      console.error("Register error:", error);

    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logout();
      setUser(null);

    } catch (error) {
      console.error("Logout error:", error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    const getAndSetUser = async () => {
      try {
        const data = await getMe()
        if (data) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

      getAndSetUser()

  }, [setUser,setLoading])

  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout
  };
};