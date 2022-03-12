import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const UseProtectedFetch = () => {
    let navigate = useNavigate(); // like href
    const { login } = useSelector((state) => state.login);
    useEffect(() => {
        if (!login.user) {
            navigate('/');
        }

        func();
    }, [])
        const func = async () => {
            try {
                const res = await fetch('http://localhost:5000/protctedroute',
                    { credentials: 'include', })
                const data = await res.json();
                // console.log('in handlelogout: = ' + data)
                if (!data) {
                    navigate('/');
                }
                else{
                    return;
                }
            }
            catch {
                console.log('cannt reach protected route');
                navigate('/');
            }
        }
}

export default UseProtectedFetch;