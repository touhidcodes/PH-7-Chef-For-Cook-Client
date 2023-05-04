import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
	GithubAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
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

	const gitHubSignIn = () => {
		return signInWithPopup(auth, gitHubProvider);
	};

	//  observe auth sate changed
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		// stop observing while unmounting
		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		logIn,
		logOut,
		auth,
		gitHubSignIn,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
