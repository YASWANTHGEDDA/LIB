import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
      <div className="bg">
      <div className="container1">
        <div className="cover">
          <div className="front">
            <img src={require("./assets/student.png")} alt="none" />
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">LMS</div>
              <div className="input-boxes">
                <div className="input-box">
                  <button
                    type="button"
                    className="btn-1"
                    onClick={() => navigate("/userreg")}
                  >
                    USER
                  </button>
                </div>
                <div className="input-box">
                  <button
                    type="button"
                    className="btn-2"
                    onClick={() => navigate("/admin-register")}
                  >
                    Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
