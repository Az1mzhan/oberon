import { useState, useEffect } from "react";

export const useQuantityNoun = (
  count: number,
  singularNoun: string,
  pluralNoun: string
): string => {
  const [quantityNoun, setQuantityNoun] = useState<string>("");

  useEffect(() => {
    count === 1 ? setQuantityNoun(singularNoun) : setQuantityNoun(pluralNoun);
  }, [count]);

  return quantityNoun;
};
