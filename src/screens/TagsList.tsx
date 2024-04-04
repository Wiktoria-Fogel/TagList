import { Box, List } from "@mui/material";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTags } from "../api/index";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";
import { styles } from "./styles";
import TagListItem from "../components/TagListItem";
import EmptyComponent from "../components/EmptyComponent";
import SettingsRow from "../components/SettingsRow";
import FooterRow from "../components/FooterRow";

const TagsList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    elementsAmount: 20,
    order: "desc",
    sortElement: "popular",
  });
  const {
    data: tags,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () =>
      fetchTags(
        filters.elementsAmount,
        filters.order,
        filters.sortElement,
        page
      ),
    queryKey: ["tags", filters, page],
  });

  if (isLoading) return <LoadingComponent />;
  if (isError || tags?.error_id)
    return (
      <ErrorComponent
        onClick={() => {
          window.location.reload();
        }}
      />
    );
  return (
    <Box style={styles.ContentWrapper}>
      <SettingsRow filters={filters} onSave={setFilters} />
      {tags?.items.length === 0 ? (
        <EmptyComponent />
      ) : (
        <List style={styles.ListWrapper}>
          {tags?.items?.map((item) => <TagListItem item={item} />)}
        </List>
      )}
      <FooterRow
        page={page}
        setPage={setPage}
        hasMore={tags?.has_more ?? false}
      />
    </Box>
  );
};

export default TagsList;
