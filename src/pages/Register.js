import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout  from "/Users/manishkarki/Desktop/developer/dented code/Projects/Librarymanagementsystem/client-library/src/components/layout/Layout.js"
import { CustomeInput } from '../components/custom-input/CustomInput';
import { postUser } from '../utils/axiosHelper';


const initialState = {
  fName: "",
  lName: "",
  email: "",
  pin: "0000",
  type: ""
}


const Register = () => {
    const [form, setForm] = useState(initialState);
    const [response, setResponse] = useState({})
 const handleOnChange = (e) => {
    const {value, name} = e.target;
    setForm({
        ...form,
        [name]: value,
    });
 };

 const handleOnSubmit = async(e) => {
    e.preventDefault();
    const {data} = await postUser(form);
    setResponse(data);
 };
 
    const inputFields = [
        {
          label: "First Name*",
          placeholder: " ",
          required: true,
          name: "fName",
          type: "text",
        },
        {
            label: "Last Name*",
            placeholder: " ",
            required: true,
            name: "lName",
            type: "text",
          },
        {
          label: "Email*",
          placeholder: "your@gmail.com",
          required: true,
          name: "email",
          type: "email",
        },
        {
          label: "Pin*",
          placeholder: "1234",
          required: true,
          name: "pin",
          type: "number",
          min: 1000,
          max: 9999,
        },

      ];
    
   console.log(form)
    return (
   
    <Layout>
    <Form className="login-page" onSubmit={handleOnSubmit}>
      <h2>Registration Form</h2>
      <hr />

       {response.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
        {inputFields.map((item) => (
        <CustomeInput {...item} onChange = {handleOnChange} />
      ))}
         <Form.Select
              name="type"
              required 
              className='mb-2'
              onChange={handleOnChange}
            >
              <option>Choose...</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </Form.Select>
      <Button variant="primary" type="submit">
       Register
      </Button>
      <div className="text-end mt-5">
        Already have an account? <Link to="/"> Login Now </Link>
      </div>
    </Form>
  </Layout>

  )
}

export default Register