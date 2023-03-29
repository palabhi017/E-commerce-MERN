import React, { useState } from "react";

const Loginpage = () => {
  return (
    <div>
      <div>
        <h1>Log In</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            type="link"
            style={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "white",
              fontSize: "15px",
              marginTop: "2px",
            }}
          >
            Home{" "}
          </button>
          <p style={{ fontSize: "15px" }}>
            <span>&#62;</span> Account
          </p>
        </div>{" "}
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          margin: "auto",
          gap: "40px",
        }}
      >
        <div style={{ textAlign: "left", padding: "10px" }}>
          <h4
            style={{
              fontWeight: "500",
              fontSize: "1.4rem",
              lineHeight: "1.8rem",
            }}
          >
            Log In
          </h4>
          <input
            style={{
              borderRadius: ".25rem",
              borderWidth: "1px",
              lineHeight: "1.8rem",
              padding: ".375rem .75rem",
              width: "90%",
              marginBottom: "20px",
            }}
            type={"email"}
            placeholder="Email"
          />
          <input
            style={{
              borderRadius: ".25rem",
              borderWidth: "1px",
              lineHeight: "1.8rem",
              padding: ".375rem .75rem",
              width: "90%",
              marginBottom: "20px",
            }}
            type={"password"}
            placeholder="Password"
          />
          <a
            style={{ cursor: "pointer", borderBottom: "1px solid" }}
            onMouseEnter
          >
            Forgot your password?
          </a>
          <button
            style={{
              backgroundColor: "black",
              marginTop: "15px",
              color: "white",
              padding: "13px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "97%",
              marginBottom: "10px",
              border: "none",
            }}
          >
            Sign In
          </button>
          <button
            style={{
              backgroundColor: "#4267B2",
              color: "white",
              padding: "13px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "97%",
              border: "none",
              marginBottom: "10px",
            }}
          >
            Sign in with Facebook
          </button>
          <button
            style={{
              backgroundColor: "#DB4437",
              color: "white",
              padding: "13px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "97%",
              border: "none",
            }}
          >
            Sign in with Google
          </button>
        </div>
        <div style={{ textAlign: "left", padding: "10px" }}>
          <h4
            style={{
              fontWeight: "500",
              fontSize: "1.4rem",
              lineHeight: "1.8rem",
            }}
          >
            New Customer
          </h4>
          <p
            style={{
              marginBottom: "1.5rem",
              lineHeight: "28px",
              color: "grey",
              fontSize: ".95rem",
            }}
          >
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
