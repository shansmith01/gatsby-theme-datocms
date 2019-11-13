import styled from "styled-components";
import { typography, color, border } from "styled-system";

/**
 * A small list of stlyed compnents for making forms
 */

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  ${color};
  ${typography};
`;

Label.defaultProps = {
  color: "primaryLight",
  borderWidth: "0px",
  borderRadius: "default",
  fontSize: 3
};

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;

  background-color: #fff;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${color};
  ${border};
  ${typography};
`;

Input.defaultProps = {
  borderWidth: "0px",
  borderRadius: "default",
  fontSize: 3,
  color: "#495057"
};

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Optional = styled.span`
  font-size: 0.8rem;
`;

const Select = styled.select`
  display: block;
`;

export { Label, Input, TextArea, Optional, Select };
