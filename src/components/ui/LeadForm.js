import React from "react";
import { Box, Text } from "rebass/styled-components";
import ContactForm from "../ui/ContactForm";
import Avatar from "../ui/Avatar";

/** This is a wrapper around the contact form which adds some styling, a call to action and image of a person to be used as a lead generation form */
const LeadForm = (pageLocation, promoDetails) => {
  return (
    <Box
      variant="leadBox"
      textAlign="center"
      mt="-140px"
      sx={{
        position: "sticky",
        top: 10
      }}
    >
      <Box width={["100%", "150px"]} m="auto" mb={3}>
        <Avatar rounded />
      </Box>
      <Text as="h3" mb={3} variant="subHeading" fontSize={[6]}>
        We are here to help
      </Text>
      <Text as="p" fontSize={[2]}>
        If you need more info or are ready to get started simply fill out this
        form and we will get back to you straight away{" "}
      </Text>
      <ContactForm formName="Lead form" />
    </Box>
  );
};

export default LeadForm;
