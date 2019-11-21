import React from "react";

import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";
import { Box, Heading, Text } from "rebass/styled-components";
import Section from "../components/ui/Section";
import ContactForm from "../components/ui/ContactForm";
import Container from "../components/ui/Container";

const ContactPage = ({ location, pageContext }) => {
  // const iframe =
  //   '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5995.396315105678!2d174.7801582148391!3d-41.29367329046091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6be67dc3d9f1ef2!2sCentury%2021%20First%20Choice%20Realty!5e0!3m2!1sen!2snz!4v1568343224067!5m2!1sen!2snz" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';

  // const iframeHHTML = () => {
  //   return {
  //     __html: iframe
  //   };
  // };

  return (
    <Layout>
      <Header title="Contact us" />
      <Section>
        <Container>
          <Box p={3} width={[1, 3 / 5]}>
            <Heading as="h2" fontSize={[5, 6]} fontWeight="500" mb={3}>
              We are always here to help
            </Heading>
            <>Contact us by filling out the form or using the details below:</>
            <div itemscope itemtype="http://schema.org/LocalBusiness">
              <strong>E:</strong>gshields_glenvar@bigpond.com <br />
              <br />
              <strong>P:</strong>
              <span itemprop="telephone">
                <a href="tel:+61893841640">+61 8 9384 1640</a>
              </span>
              <br /> <br />
              <strong>M:</strong>
              <span itemprop="telephone">
                <a href="tel:+61427 550 546"> +61 427 550 546</a>
              </span>
              <br /> <br />
              <span itemprop="address">
                <strong> A:</strong>PO Box 608 <br /> Cottesloe, 6911, WA
              </span>
              <br />
              <br />
            </div>
            {/* <div dangerouslySetInnerHTML={iframeHHTML()} /> */}
          </Box>
          <Box p={4} width={[1, 2 / 5]} bg="primaryDark" color="primaryLight">
            <Heading
              as="h2"
              fontFamily="subheading"
              fontWeight="500"
              sx={{ textTransform: "uppercase" }}
              mb={3}
              fontSize={[4, 5]}
            >
              Contact us now
            </Heading>
            <Text as="p">
              Fill out our form an we will get right back to you.
            </Text>
            <ContactForm formName="Contact" />
          </Box>
        </Container>
      </Section>
    </Layout>
  );
};

export default ContactPage;
