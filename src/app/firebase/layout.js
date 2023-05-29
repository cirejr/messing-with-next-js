"use client"
import { AuthContextProvider} from "./context/AuthContext";


const Layout = ({children }) => {
	return (
		<AuthContextProvider>
			{children}
		</AuthContextProvider>
	);
}

export default Layout;