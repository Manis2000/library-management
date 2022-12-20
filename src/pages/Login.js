import React from 'react'
import  Layout  from "../components/layout/Layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CustomeInput } from '../components/custom-input/CustomInput';
import {useState} from "react";


export const Login = () => {

  const [form, setForm] = useState({
    email: null, 
    pin: null,
  })
  

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setForm ({
        ...form,
        [name]:value,
    })
  }
    const inputFields = [
        {
          label: "Email",
          placeholder: "your@gmail.com",
          required: true,
          name: "email",
          type: "email",
        //   value: form.email,
        },
        {
          label: "pin",
          placeholder: "1234",
          required: true,
          name: "pin",
          type: "number",
        //   value: form.pin,
        },
      ];
    
  return (
    <Layout>
      <Form className="login-page" >
        <h2>Welcome Back! Login</h2>
        <hr />
        {/* {response.status === "error" && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )} */}

        {inputFields.map((item) => (
          <CustomeInput {...item} onChange={handleOnChange}  />
        ))}

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="text-end">
          New here? <Link to="/register"> register </Link>
        </div>
      </Form>
    </Layout>
  )
}
