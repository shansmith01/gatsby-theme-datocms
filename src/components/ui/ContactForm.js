import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Location } from "@reach/router";
import queryString from "query-string";
import { Box, Button } from "rebass/styled-components";
import { Input, Label } from "../styles/FormStyles";

/** This is the default contact form which can be used for contact forms and lead forms. It is wrapped with a location component  to record and url strings for marketing purposes and also records the page location  */
const ContactForm = ({ formName, ...props }) => {
  // const [focus, setFocus] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // setFocus(true);
    const isBrowser = typeof window != "undefined";
    if (isBrowser) {
      setFname(localStorage.getItem("fname") || "");
      setLname(localStorage.getItem("lname") || "");
      setEmail(localStorage.getItem("email") || "");
      setPhone(localStorage.getItem("phone") || "");
    }
  }, []);

  const onFormSuccess = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "Form Submission",
      formName
    });
  };

  return (
    <Location>
      {({ location, navigate }) => {
        return (
          <Box
            as="form"
            py={3}
            method="post"
            action="#"
            data-netlify="true"
            name={formName}
            netlify-honeypot="bot-field"
            textAlign="left"
            onSubmit={onFormSuccess}
          >
            <input type="hidden" name="form-name" value={formName} />

            <Box py={2} width={1}>
              <Label color={props.color} htmlFor="fname">
                First name
              </Label>
              <Input
                id="fname"
                name="fname"
                placeholder="e.g Jill"
                value={fname}
                required
                // autoFocus
                // className={focus ? "focus" : ""}
                onChange={e => {
                  setFname(e.target.value);
                  localStorage.setItem("fname", e.target.value);
                }}
              />
            </Box>
            <Box py={2} width={1}>
              <Label color={props.color} htmlFor="lname">
                Last name
              </Label>
              <Input
                id="lname"
                name="lname"
                placeholder="e.g Smith"
                required
                value={lname}
                onChange={e => {
                  setLname(e.target.value);
                  localStorage.setItem("lname", e.target.value);
                }}
              />
            </Box>

            <Box py={2} width={[1]}>
              <Label color={props.color} htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="e.g jill@gmail.com"
                type="email"
                value={email}
                required
                onChange={e => {
                  setEmail(e.target.value);
                  localStorage.setItem("email", e.target.value);
                }}
              />
            </Box>
            <Box py={2} width={[1]}>
              <Label color={props.color} htmlFor="phone">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={phone}
                placeholder="e.g 021 222 2222"
                onChange={e => {
                  setPhone(e.target.value);
                  localStorage.setItem("phone", e.target.value);
                }}
              />
            </Box>
            <Box py={2}>
              <Button variant="primary">Contact me </Button>
            </Box>

            {/* hidden fields */}

            <input type="hidden" name="submit-page" value={location.href} />
            <input
              type="hidden"
              name="promo-details"
              value={location.search ? queryString.parse(location.search) : ""}
            />
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
          </Box>
        );
      }}
    </Location>
  );
};

ContactForm.propTypes = {
  /** Enter the name of the form */
  formName: PropTypes.string.isRequired
};

export default ContactForm;
