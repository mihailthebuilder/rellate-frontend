import { KeyboardEvent } from "react";

export const preventEnterSubmission: (event: KeyboardEvent) => boolean = (
  event
) => {
  if (event.key === "Enter") {
    event.preventDefault();
    return false;
  }
  return true;
};

export const isValidEmail: (email: string) => boolean = (email) => {
  const re =
    /^([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)$/;
  return re.test(email);
};
