import { Button } from "@mui/material";
import { string } from "../assets/strings";

export default {
  title: "Button",
  component: Button,
};

export const Default = {
  args: {
    id: "app-button-default",
    variant: "contained",
    children: string.Save,
  },
};

export const Disabled = {
  args: {
    id: "app-button-disabled",
    variant: "contained",
    disabled: true,
    children: string.Save,
  },
};

export const Error = {
  args: {
    id: "app-button-error",
    variant: "contained",
    children: string.TryAgain,
    color: "error",
  },
};
