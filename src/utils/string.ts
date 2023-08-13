export const buildQueryString = (params: Record<string, unknown>): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params)
    .filter(([, value]) => !!value)
    .forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          searchParams.append(key, encodeURIComponent(`${item}`));
        });
      } else {
        searchParams.set(key, encodeURIComponent(`${value}`));
      }
    });

  return searchParams.toString();
};
