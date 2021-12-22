import { useState } from "react";

const useList = (initialList = []) => {
  const [list, setList] = useState(initialList);

  function add(newItem) {
    setList([...list, newItem]);
  }

  function remove(index) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  return { list, add, remove };
};

export default useList;
