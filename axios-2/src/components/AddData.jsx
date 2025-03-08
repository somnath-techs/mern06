import React, { useState } from "react";
import '../assets/css/form.css'
const AddData = () => {
  const [data, setData] = useState({});

  return (
    <>
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="form-box">
        <form className="form">
          <span className="title">Add Data</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Have an account? <a href="">Log in</a>{" "}
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default AddData;
