import React from "react";

export const usePrevious = <State>(state: State): State => {
  const ref = React.useRef<State>();
  React.useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
};
