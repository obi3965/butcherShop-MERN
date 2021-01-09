import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { read, update, updateUser } from "./UserApi";
/**
 * @author
 * @function Profile
 **/

const Profile = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { token } = isAuthenticated();
  const { name, email, password, error, success } = values;
  const init = (userId) => {
    console.log(userId);
    read(userId, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(match.params.userId);
  }, []);

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
};

//form functionality
const clickSubmit = e => {
  e.preventDefault();
  update(match.params.userId, token, { name, email, password }).then(data => {
      if (data.error) {
          // console.log(data.error);
          alert(data.error);
      } else {
          updateUser(data, () => {
              setValues({
                  ...values,
                  name: data.name,
                  email: data.email,
                  success: true
              });
          });
      }
  });
};

//redirect the user to the cart page
const redirectUser = success => {
  if (success) {
      return <Redirect to="/cart" />;
  }
};

//create the user update form
  const profileUpdate = (name, email, password) => (
    <form>
        <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
        </div>
        <div className="form-group">
            <label className="text-muted">Email</label>
            <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
        </div>
        <div className="form-group">
            <label className="text-muted">Password</label>
            <input type="password" onChange={handleChange('password')} className="form-control" value={password} />
        </div>

        <button onClick={clickSubmit} className="btn btn-primary">
            Submit
        </button>
    </form>
);

  return (
    <div>
       <div className="container-fluid">

   <h2>profile update</h2>
   {profileUpdate(name, email, password)}
   {redirectUser(success)}
       </div>;
    </div>
   
  )
  
};

export default Profile;
