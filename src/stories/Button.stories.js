import { string } from "../assets/strings";
import AppButton from "../components/AppButton";

export default {
  title: "Button",
  component: AppButton,
};

export const Default = {
  args: {
    id: "app-button-default",
    variant: "contained",
    title: string.Save,
  },
};

export const Disabled = {
  args: {
    id: "app-button-disabled",
    variant: "contained",
    disabled: true,
    title: string.Save,
  },
};

export const Error = {
  args: {
    id: "app-button-error",
    variant: "contained",
    title: string.TryAgain,
    color: "error",
  },
};
