import styled from "styled-components";
import { Input } from "@material-ui/core";
import { yellow } from "../../resources/style";

const { lime } = yellow;

const IStyled = styled(Input)`
  font-size: 1.3em;
  color: ${lime};
  width: 100%;

  &::before {
    border-bottom-color: white !important;
  }

  &::after {
    border-bottom-color: ${lime};
  }
`;

export default IStyled;
