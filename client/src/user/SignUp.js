import React, { useState } from "react";
import Layout from "../core/Layout";
import { API } from "../config";

const Signup = () => {
  //we use object for every single input in useState
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleChange = (name) => (e) => {
    setvalues({ ...values, error: false, [name]: e.target.value });
  };

  const signup = (user) => {
    // console.log(name, email, password)
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { name, email, password, success, error } = values;
  const clickSubmit = (e) => {
    e.preventDefault();
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setvalues({ ...values, error: data.error, success: false });
        //if not error in the fields clear the input text as you submit
      } else {
        setvalues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };
  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label htmlFor="name" className="text-muted">
          Name
        </label>
        <input
          type="text"
          onChange={handleChange("name")}
          value={name}
          htmlFor="name"
          className="form-control"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-muted">
          Email
        </label>
        <input
          type="text"
          onChange={handleChange("email")}
          value={email}
          htmlFor="email"
          className="form-control"
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="text-muted">
          Password
        </label>
        <input
          type="text"
          onChange={handleChange("password")}
          value={password}
          htmlFor="password"
          className="form-control"
          autoComplete="off"
        />
      </div>
      <button type="submit" onClick={clickSubmit} className=" btn btn-danger">
        signup
      </button>
    </form>
  );

  //displaying error message
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  //displaying the success message
  const showSuccess = () => (
    <div
      className="alert alert-danger"
      style={{ display: success ? "" : "none" }}
    >
      your are successfully signed up, please signin now
    </div>
  );

  return (
    <>
      <Layout title="our signup" desc="please signup to get more info">
        <div className="container">
          {showError()}
          {showSuccess()}
          {signUpForm()}
          {JSON.stringify(values)}
        </div>

        {/* <p>{ API }</p>  */}
      </Layout>
    </>
  );
};

export default Signup;
