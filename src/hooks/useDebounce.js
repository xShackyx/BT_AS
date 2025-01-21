import { useEffect, useState } from "react";

export function useDebounce(value, seconds) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    function () {
      const timer = setTimeout(function () {
        setDebouncedValue(value.trim());
      }, seconds * 1000);

      return () => clearTimeout(timer);
    },
    [value]
  );

  return debouncedValue;
}
