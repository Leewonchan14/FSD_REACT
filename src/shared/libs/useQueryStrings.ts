const useQueryStrings = function (
  urlSearchParam: URLSearchParams,
  setSearchParam: (_: URLSearchParams) => void,
) {
  const query = Object.fromEntries(urlSearchParam.entries());

  const setQuery = (newQuery: Record<string, string>) => {
    const newSearchParam = new URLSearchParams();
    Object.entries({ ...query, ...newQuery }).forEach(([key, value]) => {
      newSearchParam.append(key, value);
    });
    setSearchParam(newSearchParam);
  };

  return { query, setQuery };
};

export default useQueryStrings;
