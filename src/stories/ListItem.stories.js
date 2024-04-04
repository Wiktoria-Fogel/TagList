import TagListItem from "../components/TagListItem";

export default {
  title: "ListItem",
  component: TagListItem,
};

export const Default = {
  args: {
    id: "tag-item",
    item: {
      name: "javascript",
      count: 2345165,
    },
  },
};
