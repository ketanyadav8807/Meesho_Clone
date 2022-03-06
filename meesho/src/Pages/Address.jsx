import React, { useContext, useState } from "react";
import { CheckoutContext } from "../Context/CheckoutContext";
import { Box, TextField, Typography, Button } from "@mui/material";
import styles from "../CSS/Address.module.css";
export const Address = () => {
  const { handleNext } = useContext(CheckoutContext);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [nearby, setNearby] = useState("");
  document.title = "Address";
  const validateForm = (e) => {
    e.preventDefault();
    if (name && phone && area && houseNo && pincode && state && city) {
      setIsError(false);
      handleNext();
    } else {
      setIsError(true);
    }

    
  };
  return (
    <div className={styles.container}>
      <p style={{ letterSpacing: "1px" }}> Select Delivery Address</p>
      <form onSubmit={() => validateForm()}>
        <Box
          className={styles.wrap}
          display={"flex"}
          sx={{
            flexDirection: "column",
            width: "600px",
            border: "1px solid rgb(200,200,200)",
            borderRadius: "5px",
            padding: "3%",
            margin: "4% 0%",
          }}
        >
          <Box component="form" noValidate autoComplete="off">
            <Typography
              variant="h4"
              sx={{
                color: "rgb(51, 51, 51)",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "28px",
                margin: "1%",
              }}
            >
              {" "}
              <svg
                width="20"
                height="20"
                color="red"
                xmlns="http://www.w3.org/2000/svg"
                stroke="orangeT1"
                iconSize="20"
                class="Icon-sc-1iwi4w1-0 hPXzJz"
                style={{ margin: "0% 2% -1% 0%" }}
              >
                <path
                  d="M18.066 16.735a5.886 5.886 0 01-4.193 1.739 5.879 5.879 0 01-4.192-1.74l-6.416-6.41A5.893 5.893 0 011.531 6.13c0-1.584.616-3.074 1.734-4.192a1.386 1.386 0 011.966 0l2.143 2.143a1.386 1.386 0 010 1.965l-.914.914a2.362 2.362 0 000 3.34l3.238 3.244a2.362 2.362 0 003.341 0l.918-.919c.524-.523 1.442-.523 1.966.005l2.143 2.138a1.386 1.386 0 010 1.966zm1.082-3.044l-2.143-2.143a2.921 2.921 0 00-4.13 0l-.914.914a.83.83 0 01-1.18 0L7.538 9.224a.836.836 0 010-1.18l.918-.919c.55-.55.852-1.282.852-2.063 0-.78-.302-1.513-.852-2.063L6.313.856A2.907 2.907 0 004.25 0a2.918 2.918 0 00-2.063.856A7.41 7.41 0 000 6.131a7.41 7.41 0 002.187 5.275l6.411 6.411A7.417 7.417 0 0013.873 20a7.407 7.407 0 005.27-2.183A2.9 2.9 0 0020 15.754c0-.78-.302-1.513-.852-2.063z"
                  fill="#666"
                  stroke="rgb(255, 232, 205)"
                ></path>
              </svg>
              Contact Details
            </Typography>
            <div style={{ margin: "1% 3%" }}>
              <TextField
                value={name}
                error={isError}
                onChange={(e) => setName(e.currentTarget.value)}
                required
                id="Name"
                fullWidth
                label="Name"
                variant="standard"
              />
            </div>
            <div style={{ margin: "1% 3%" }}>
              <TextField
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
                required
                error={isError}
                id="Phonenumber"
                label="Phone number"
                variant="standard"
                fullWidth
              />
            </div>
            <Typography
              variant="h4"
              sx={{
                color: "rgb(51, 51, 51)",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "28px",
                margin: "4% 1% 0% 0%",
              }}
            >
              <svg
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                iconSize="20"
                class="Icon-sc-1iwi4w1-0 yCMXi"
                width="20"
                height="20"
                style={{ margin: "0% 2% -1% 0%" }}
              >
                <path
                  d="M13.14 11.925c-.17.188-.357.371-.552.543l-4.603 4.056-4.604-4.055a6.763 6.763 0 01-.551-9.628A6.961 6.961 0 017.987.564a6.95 6.95 0 014.601 1.733 6.739 6.739 0 012.298 4.701 6.719 6.719 0 01-1.746 4.926z"
                  fill="#FDF0E8"
                ></path>
                <path
                  d="M7.987 4.771a2.5 2.5 0 00-2.5 2.494 2.5 2.5 0 005 0 2.5 2.5 0 00-2.5-2.494z"
                  fill="#fff"
                ></path>
                <path
                  d="M12.37 11.364a5.9 5.9 0 01-.47.468L7.985 15.32l-3.916-3.488a5.862 5.862 0 01-.469-8.28 5.892 5.892 0 018.3-.468 5.82 5.82 0 011.954 4.043 5.817 5.817 0 01-1.485 4.237zm.218-9.048a6.91 6.91 0 00-4.6-1.752A6.93 6.93 0 002.83 2.866 6.89 6.89 0 003.38 12.6l4.26 3.794a.515.515 0 00.688 0l4.26-3.795a6.86 6.86 0 00.55-.55 6.836 6.836 0 001.746-4.98 6.842 6.842 0 00-2.297-4.753z"
                  fill="#333"
                ></path>
                <path
                  d="M7.985 8.932c-.912 0-1.654-.74-1.654-1.65a1.654 1.654 0 013.307 0c0 .91-.741 1.65-1.653 1.65zm0-4.328a2.685 2.685 0 00-2.686 2.679 2.685 2.685 0 005.371 0 2.685 2.685 0 00-2.685-2.68z"
                  fill="#333"
                ></path>
              </svg>
              Address
            </Typography>
            <div style={{ margin: "1% 3%" }}>
              <TextField
                value={houseNo}
                onChange={(e) => setHouseNo(e.currentTarget.value)}
                required
                error={isError}
                fullWidth
                id="House"
                label="House no./ Building Name"
                variant="standard"
              />
            </div>
            <div style={{ margin: "1% 3%" }}>
              <TextField
                value={area}
                onChange={(e) => setArea(e.currentTarget.value)}
                required
                error={isError}
                fullWidth
                id="Area"
                label="Road Name/ Area/ Colony"
                variant="standard"
              />
            </div>
            <div style={{ margin: "1% 3%" }}>
              <TextField
                value={pincode}
                onChange={(e) => setPincode(e.currentTarget.value)}
                required
                error={isError}
                id="pincode"
                fullWidth
                label="Pincode"
                variant="standard"
              />
            </div>
            <div style={{ margin: "1% 3%" }}>
              <TextField
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                required
                error={isError}
                id="city"
                sx={{ width: "46%" }}
                label="City"
                variant="standard"
              />
              <span style={{ margin: "1% 3%", width: "50%" }}></span>
              <TextField
                value={state}
                onChange={(e) => setState(e.currentTarget.value)}
                required
                error={isError}
                id="state"
                sx={{ width: "48%" }}
                label="State"
                variant="standard"
              />
            </div>
            <div style={{ margin: "1% 3%" }}>
              <TextField
                value={nearby}
                onChange={(e) => setNearby(e.currentTarget.value)}
                name="nearby"
                id="nearby"
                fullWidth
                label="Nearby Location (optional)"
                variant="standard"
              />
            </div>
            <div>
              <Button
                disableRipple
                variant="contained"
                size="large"
                component="submit"
                fullWidth
                onSubmit={validateForm}
                onClick={validateForm}
                sx={{
                  margin: "15% 0% 3% 0%",
                  fontSize: "18px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
              >
                Save Address & Continue
              </Button>
            </div>
          </Box>
        </Box>
      </form>
    </div>
  );
};
