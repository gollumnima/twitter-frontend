import React from 'react';
import { TextField } from '../common/TextField';

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export const Editable: React.FC<Props> = ({
  setValue, value,
}) => {
  console.log('ddd');
  return (
    <TextField onChange={setValue} value={value} />
  );
};
