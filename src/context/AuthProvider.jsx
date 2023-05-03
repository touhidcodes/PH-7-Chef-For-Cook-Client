import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	// const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	//  observe auth sate changed
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			// setUser(currentUser);
			setLoading(false);
		});

		// stop observing while unmounting
		return () => {
			return unsubscribe();
		};
	}, []);
	const user = { name: "hi" };

	const authInfo = { user, loading, createUser, logIn, logOut };

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
