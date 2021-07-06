import styled from "styled-components";
import { InputLabel } from "@material-ui/core";

export const Layout = styled(InputLabel)`
  color: white !important;
  font-size: 1.5em;
  position: relative;
  width: 53rem;
  line-height: 1.2;

  @media (max-width: 900px) {
    width: 95vw;
  }

  @media (max-width: 500px) {
    font-size: 1.5em;
  }
`;

export const QNIndicator = styled.span`
  font-size: 0.6em;
  position: absolute;
  left: -3em;
  top: 0.4em;
`;
