import styled from "styled-components";
import { color } from "styled-system";

const CloseButton = styled.a(
  {
    position: "absolute",
    top: "30px",
    right: "55px",
    cursor: "pointer"
  },
  color
);

CloseButton.defaultProps = {
  color: "white"
};

export default CloseButton;
