import React from "react";
import { MenuItem } from "@mui/material";
import DropdownMenu from "../components/DropdownMenu";
import { string } from "../assets/strings";

export default {
  title: "DropdownMenu",
  component: (props) => (
    <DropdownMenu {...props}>
      <MenuItem value={string.Desc}>{string.Desc}</MenuItem>
      <MenuItem value={string.Asc}>{string.Asc}</MenuItem>
    </DropdownMenu>
  ),
};

export const Order = {
  args: {
    id: "dropdown-menu-order",
    title: string.Order,
    value: string.Desc,
  },
};
