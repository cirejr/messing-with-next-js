import firebase_app from "../config";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(firebase_app)

const signUp = async (email, password) => {
	let result = null,
		error = null;

	try {
		result = await createUserWithEmailAndPassword(auth, email, password)
	} catch (e) {
		error = e
	}

	return {result, error }
}

export default signUp; 