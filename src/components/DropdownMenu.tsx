import React from "react";
import { InputLabel, Select } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  title: string;
};

const DropdownMenu = ({ value, onChange, children, title }: Props) => {
  return (
    <Box display="flex">
      <InputLabel style={styles.Label}>{title}: </InputLabel>
      <Select
        value={value}
        onChange={(event) => {
          onChange(event.target.value);
        }}
      >
        {children}
      </Select>
    </Box>
  );
};

export default DropdownMenu;

const styles = {
  Label: {
    marginLeft: "16px",
    marginRight: "8px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
};
