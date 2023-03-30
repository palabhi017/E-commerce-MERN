import { Box, Button, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import React from "react";
const Loginpage = () => {
  return (
    <Box>
      <Box marginBottom={"30px"}>
        <Heading
          fontWeight="400"
          fontSize="2rem"
          lineHeight="1.8rem"
          marginBottom={"20px"}
        >
          Log In
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
      <SimpleGrid
        columns={{ base: "2", sm: "1", xl: "2" }}
        width="50%"
        margin="auto"
        gap="40px"
      >
        <Box style={{ textAlign: "left", padding: "10px" }}>
          <Heading
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="1.8rem"
            marginBottom={"10px"}
          >
            Log In
          </Heading>
          <Input
            borderRadius=".25rem"
            borderWidth="1px"
            lineHeight="1.8rem"
            padding=".375rem .75rem"
            width="100%"
            marginBottom="20px"
            type={"email"}
            placeholder="Email"
          />
          <Input
            borderRadius=".25rem"
            borderWidth="1px"
            lineHeight="1.8rem"
            padding=".380rem .75rem"
            width="100%"
            marginBottom="20px"
            type={"password"}
            placeholder="Password"
          />
          <a
            style={{ cursor: "pointer", borderBottom: "1px solid" }}
            onMouseEnter
          >
            Forgot your password?
          </a>
          <Button
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
          </Button>
          <Button
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
          </Button>
          <Button
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
          </Button>
        </Box>
        <Box style={{ textAlign: "left", padding: "10px" }}>
          <Heading
            style={{
              fontWeight: "500",
              fontSize: "1.4rem",
              lineHeight: "1.8rem",
              marginBottom: "10px",
            }}
          >
            New Customer
          </Heading>
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
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Register
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Loginpage;
