import type {UseSkeletonProps} from "./use-skeleton";

import {forwardRef} from "@heroui/system";

import {useSkeleton} from "./use-skeleton";

export interface SkeletonProps extends UseSkeletonProps {}

const Skeleton = forwardRef<"div", SkeletonProps>((props, ref) => {
  const {Component, children, getSkeletonProps, getContentProps} = useSkeleton({...props});

  return (
    <Component ref={ref} {...getSkeletonProps()}>
      <div {...getContentProps()}>{children}</div>
    </Component>
  );
});

Skeleton.displayName = "HeroUI.Skeleton";

export default Skeleton;
