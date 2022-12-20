import { Props as ListProps } from "./List";

export const getUniqueItems = (list: ListProps["list"]) =>
  list != null
    ? [...list?.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()]
    : [];
