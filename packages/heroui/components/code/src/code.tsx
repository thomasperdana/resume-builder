import type {UseCodeProps} from "./use-code";

import {forwardRef} from "@heroui/system-rsc";

import {useCode} from "./use-code";

export interface CodeProps extends UseCodeProps {}

const Code = forwardRef<"div", CodeProps>((props, ref) => {
  const {Component, children, getCodeProps} = useCode({...props});

  return (
    <Component ref={ref} {...getCodeProps()}>
      {children}
    </Component>
  );
});

Code.displayName = "HeroUI.Code";

export default Code;
