import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method:"post",
            url: "http://localhost:5000/register",
            data: {
                email,
                password,
            },
        };
        axios(configuration)
        .then((result) => {setRegister(true);})
        .catch((error) => {error = new Error();})
    }
    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e)=>handleSubmit(e)}>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {register ? (
                    <p className='text-success'>You are registered</p>):(<p className="text-danger">You Are Not Registered</p>
                )}
            </Form>
        </>
    )
}