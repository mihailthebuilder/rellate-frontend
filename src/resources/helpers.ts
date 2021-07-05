import { KeyboardEvent } from "react";

const preventEnterSubmission: (event: KeyboardEvent) => boolean = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    return false;
  }
  return true;
};

export default preventEnterSubmission;
