import React, { useRef } from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authActions } from '../store/authSlice';


const LogIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            const user = users.filter(item => item.email === email);
            if (user.length === 0) {
                alert("Invalid email!");
            } else {
                if (user[0].password === password) {
                    dispatch(authActions.setTrue());
                    localStorage.setItem("login", true);
                    navigate('/');

                } else {
                    alert("Invalid password!");
                }
            }
        } else {
            alert("User not present!");
        }
    }

    return (
        <form className="flex max-w-md flex-col gap-4 md:mx-auto mx-5" onSubmit={submitHandler}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput id="email" type="email" placeholder="dansavvy@gmail.com" ref={emailRef} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" ref={passwordRef} required />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default LogIn;