import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { string } from "../assets/strings";
import { Item } from "../types";

type Props = {
  item: Item;
};

const TagListItem = ({ item }: Props) => {
  return (
    <ListItem
      key={item.name + item.count}
      secondaryAction={
        <ListItemText primary={`${item.count} ${string.Questions}`} />
      }
      style={styles.ListItem}
    >
      <ListItemText primary={`${string.TagLabel}: ${item.name}`} />
    </ListItem>
  );
};

export default TagListItem;

const styles = {
  ListItem: {
    paddingLeft: "32px",
    color: "#FFFFFF",
    backgroundColor: "#2F4F4F",
    marginBottom: "16px",
    borderRadius: "8px",
    height: "70px",
  },
};
