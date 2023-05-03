import React, { createContext, useState } from "react";

export const AuthUser = createContext(null);
const [user, setUser] = useState();
const [loading, setLoading] = useState(true);

const AuthProvider = ({ children }) => {
	setUser({ displayName: "hi" });
	const userInfo = { user, loading };

	return <AuthContext.Provider value={userInfo}></AuthContext.Provider>;
};

export default AuthProvider;
