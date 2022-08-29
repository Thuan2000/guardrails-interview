import React from "react";
import { Form } from "semantic-ui-react";

interface IDatetimeInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const DatetimeInput: React.FC<IDatetimeInputProps> = ({ label, ...props }) => {
  return (
    <Form.Field>
      {!!label && <label>{label}</label>}

      <input type="datetime" {...props} />
    </Form.Field>
  );
};
export default DatetimeInput;