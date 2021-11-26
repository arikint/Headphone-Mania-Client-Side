import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { useContext } from 'react';

const useAuth = () => {
    console.log("from useauth logout");
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;