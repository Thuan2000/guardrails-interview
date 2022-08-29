import React from "react";
import { Form, Label } from "semantic-ui-react";
import Datetime, { DatetimepickerProps } from "react-datetime";

interface IDatetimeInputProps extends DatetimepickerProps {
  label?: string;
  error?: string;
}

const DatetimeInput: React.FC<IDatetimeInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <Form.Field error={error}>
      {!!label && <label>{label}</label>}

      <Datetime inputProps={{ placeholder: "28/08/2022 12:00PM" }} {...props} />

      {!!error && (
        <Label prompt pointing="above">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
export default DatetimeInput;