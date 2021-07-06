import styled from "styled-components";
import { FormHelperText, Input } from "@material-ui/core";
import { yellow } from "../../resources/style";

const { lime, crayola } = yellow;

export const IStyled = styled(Input)`
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

export const EMessage = styled(FormHelperText)`
  color: ${crayola};
  font-size: 0.7em;
`;
