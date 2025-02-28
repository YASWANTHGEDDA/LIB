import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGooglePlusG, FaTwitter } from "react-icons/fa";
// import "./../styles/user.css";
export default function Userreg() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    email: "",
    password: "",
  });

  const toggleForm = () => setIsSignUp(!isSignUp);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isSignUp &&
      (!formData.name ||
        !formData.regNo ||
        !formData.email ||
        !formData.password)
    ) {
      alert("❌ Please fill in all fields!");
      return;
    }
    if (!isSignUp && (!formData.email || !formData.password)) {
      alert("❌ Please enter both email and password!");
      return;
    }
    try {
      if (isSignUp) {
        alert("registarion success");
        setIsSignUp(false);
      } else {
        alert("login success");
        navigate("/web");
      }
    } catch (error) {
      alert(error);
    }
  };

  //     try {
  //       if (isSignUp) {
  //         const response = await registerUser(formData);
  //         alert(response.message || "✅ Registration successful!");
  //       } else {
  //         const response = await loginUser(formData);
  //         alert("✅ Login successful!");
  //         localStorage.setItem("user", JSON.stringify(response.user));
  //         navigate("/home"); // Redirect to Home component
  //       }
  //     } catch (error) {
  //       alert("❌ " + error);
  //     }
  //   };

  return (
    <div className="User">
      <div
        className={`container ${isSignUp ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="social">
              <a href="https://www.facebook.com/login.php/">
                <FaFacebook />
              </a>
              <a href="https://accounts.google.com/signin">
                <FaGooglePlusG />
              </a>
              <a href="https://twitter.com/i/flow/signup">
                <FaTwitter />
              </a>
            </div>
            <span>or use your email for register</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="regNo"
              placeholder="Reg.No"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="social">
              <a href="https://www.facebook.com/login.php/">
                <FaFacebook />
              </a>
              <a href="https://accounts.google.com/signin">
                <FaGooglePlusG />
              </a>
              <a href="https://twitter.com/i/flow/signup">
                <FaTwitter />
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <a href="#">Forgot Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back</h1>
              <p>
                Welcome back! Please enter your credentials to access your
                account.
              </p>
              <button className="Ghost" onClick={toggleForm}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello User</h1>
              <p>
                To keep connected with us, please sign up with your personal
                info.
              </p>
              <button className="Ghost" onClick={toggleForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
