import type { Item } from "../types";

export const fetchTags = async (elementsAmount: number, order: string, sortElement: string, page: number): Promise<{has_more: boolean, items: Item[], error_id?: number} > => {
  const response = await fetch(
    `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${elementsAmount}&order=${order}&sort=${sortElement}&site=stackoverflow`
  );
  const jsonResponse = response.json();

  return jsonResponse;
};
