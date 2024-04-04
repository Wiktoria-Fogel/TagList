import { TextField } from "@mui/material";
import { string } from "../assets/strings";

export default {
  title: "TextField",
  component: TextField,
};

export const AppTextField = {
  args: {
    id: "app-text-field",
    label: string.NumberOfElements,
    variant: "outlined",
    type: "number",
    value: 20,
  },
};
