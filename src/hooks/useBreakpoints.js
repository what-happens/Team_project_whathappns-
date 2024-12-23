import { useState, useEffect } from "react";

export function useBreakpoints() {
  const breakpoints = {
    pc: "(min-width : 1024px)",
  };

  const [matches, setMatches] = useState(() => {
    const initialMatches = {};
    for (const key in breakpoints) {
      initialMatches[key] = window.matchMedia(breakpoints[key]).matches;
    }
    return initialMatches;
  });

  useEffect(() => {
    const mediaQueryLists = {};
    const keys = Object.keys(breakpoints);

    const updateMatches = () => {
      const updatedMatches = {};
      keys.forEach((key) => {
        updatedMatches[key] = mediaQueryLists[key].matches;
      });
      setMatches(updatedMatches);
    };

    keys.forEach((key) => {
      mediaQueryLists[key] = window.matchMedia(breakpoints[key]);
      mediaQueryLists[key].addEventListener("change", updateMatches);
    });

    updateMatches();

    return () => {
      keys.forEach((key) => {
        mediaQueryLists[key].removeEventListener("change", updateMatches);
      });
    };
  }, []);

  return matches;
}
