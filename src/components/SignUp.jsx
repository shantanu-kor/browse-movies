import React, { useRef } from 'react';
import { Button, Select, Label, TextInput } from "flowbite-react";

const SignUp = (props) => {
    const nameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const professionRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const profession = professionRef.current.value;
        const user = { name, password, email, phone, profession };

        const users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            const alreadyUser = users.filter(item => item.email === email);
            if (alreadyUser.length === 0) {
                localStorage.setItem("users", JSON.stringify([...JSON.parse(users), user]));
                nameRef.current.value = '';
                passwordRef.current.value = '';
                emailRef.current.value = '';
                phoneRef.current.value = '';
                professionRef.current.value = 'Developer';
                props.toLogin();
            } else {
                alert("Email already present");
            }
        } else {
            localStorage.setItem("users", JSON.stringify([user]));
            nameRef.current.value = '';
            passwordRef.current.value = '';
            emailRef.current.value = '';
            phoneRef.current.value = '';
            professionRef.current.value = 'Developer';
            props.toLogin();
        }
    }

    return (
        <form className="flex max-w-md flex-col gap-4 md:mx-auto mx-5" onSubmit={submitHandler}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput id="name" type="text" placeholder="Dan Savvy" ref={nameRef} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput id="password" type="password" ref={passwordRef} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput id="email" type="email" placeholder="dansavvy@gmail.com" ref={emailRef} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="phone" value="Your phone" />
                </div>
                <TextInput id="phone" type="tel" placeholder="9546512345" ref={phoneRef} required />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="profession" value="Select your profession" />
                </div>
                <Select id="profession" ref={professionRef} required>
                    <option value="Developer">Developer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Entrepreneur">Entrepreneur</option>
                    <option value="Other">Other</option>
                </Select>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default SignUp;