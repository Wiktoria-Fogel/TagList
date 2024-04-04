import { Box, TextField, MenuItem, Button } from "@mui/material";
import { string } from "../assets/strings";
import DropdownMenu from "../components/DropdownMenu";
import { useState } from "react";

type Filter = {
  elementsAmount: number;
  order: string;
  sortElement: string;
};

type Props = {
  onSave: (filters: Filter) => void;
  filters: Filter;
};

const SettingsRow = ({ onSave, filters }: Props) => {
  const [elementsAmount, setElementsAmount] = useState(filters.elementsAmount);
  const [order, setOrder] = useState(filters.order);
  const [sortElement, setSortElement] = useState(filters.sortElement);

  return (
    <Box display="flex">
      <TextField
        id="outlined-basic"
        label={string.NumberOfElements}
        variant="outlined"
        type="number"
        value={elementsAmount}
        onChange={(event) => setElementsAmount(Number(event.target.value))}
      />
      <DropdownMenu
        title={string.Order}
        value={order}
        onChange={(item) => setOrder(item)}
      >
        <MenuItem value={"desc"}>{string.Desc}</MenuItem>
        <MenuItem value={"asc"}>{string.Asc}</MenuItem>
      </DropdownMenu>
      <DropdownMenu
        title={string.Sort}
        value={sortElement}
        onChange={(item) => setSortElement(item)}
      >
        <MenuItem value={"popular"}>{string.Popular}</MenuItem>
        <MenuItem value={"activity"}>{string.Activity}</MenuItem>
        <MenuItem value={"name"}>{string.Name}</MenuItem>
      </DropdownMenu>
      <Button
        variant={"contained"}
        style={{ marginLeft: "16px" }}
        onClick={() =>
          onSave({
            elementsAmount,
            order,
            sortElement,
          })
        }
      >
        {string.Save}
      </Button>
    </Box>
  );
};

export default SettingsRow;
