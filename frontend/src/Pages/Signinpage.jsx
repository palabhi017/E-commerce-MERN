import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

const Signinpage = () => {
  return (
    <Box>
      <Box>
        <Heading
          style={{
            fontWeight: "400",
            fontSize: "2rem",
            lineHeight: "1.8rem",
            marginBottom: "20px",
          }}
        >
          Register
        </Heading>
        <Box display="flex" justifyContent="center">
          <Button
            type="link"
            style={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "white",
              fontSize: "15px",
            }}
          >
            Home{" "}
          </Button>
          <p style={{ fontSize: "15px", marginTop: "9px" }}>
            <span>&#62;</span> Account
          </p>
        </Box>{" "}
      </Box>
      <Box
        style={{
          padding: "10px",
          textAlign: "left",
          width: "23%",
          margin: "auto",
        }}
      >
        <Heading
          style={{
            fontWeight: "500",
            fontSize: "1.4rem",
            lineHeight: "1.8rem",
            marginBottom: "10px",
          }}
        >
          Register
        </Heading>
        <input
          style={{
            borderRadius: ".25rem",
            borderWidth: "1px",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="First Name"
        />
        <input
          style={{
            borderRadius: ".25rem",
            borderWidth: "1px",
            boxSizing: "border-box",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
          }}
          type="text"
          placeholder="Last Name"
        />
        <input
          style={{
            borderRadius: ".25rem",
            boxSizing: "border-box",
            borderWidth: "1px",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
          }}
          type="email"
          placeholder="Email"
        />
        <input
          style={{
            borderRadius: ".25rem",
            boxSizing: "border-box",
            borderWidth: "1px",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
          }}
          type="password"
          placeholder="Password"
        />
        <p style={{ fontSize: "13px", color: "grey", marginBottom: "10px" }}>
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
            width: "100%",
            marginBottom: "10px",
          }}
        >
          Register
        </button>
        <button
          style={{
            width: "100%",
            padding: "13px 20px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid",
          }}
        >
          Log In
        </button>
        <button
          style={{
            backgroundColor: "#4267B2",
            color: "white",
            padding: "13px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
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
            width: "100%",
            border: "none",
          }}
        >
          Sign in with Google
        </button>
      </Box>
    </Box>
  );
};

export default Signinpage;
