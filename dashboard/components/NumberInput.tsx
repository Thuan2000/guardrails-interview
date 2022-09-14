import React from "react";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import { Form, Label } from "semantic-ui-react";

interface INumberInputProps extends NumberFormatProps {
  label?: string;
  error?: string;
}

const NumberInput: React.FC<INumberInputProps> = ({
  label,
  error,
  ...props
}) => {
  return (
    <Form.Field error={error}>
      {!!label && <label>{label}</label>}
      <div className={`ui input`}>
        <NumberFormat thousandSeparator="," {...props} />
      </div>
      {!!error && (
        <Label basic pointing="above" prompt>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
export default NumberInput;