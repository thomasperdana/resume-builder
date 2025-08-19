import type {UseAvatarGroupProps} from "./use-avatar-group";

import {forwardRef} from "@heroui/system";

import {AvatarGroupProvider} from "./avatar-group-context";
import {useAvatarGroup} from "./use-avatar-group";
import Avatar from "./avatar";

export interface AvatarGroupProps extends UseAvatarGroupProps {}

const AvatarGroup = forwardRef<"div", AvatarGroupProps>((props, ref) => {
  const {
    Component,
    clones,
    context,
    remainingCount,
    getAvatarGroupCountProps,
    getAvatarGroupProps,
    renderCount = (count) => <Avatar {...getAvatarGroupCountProps()} name={`+${count}`} />,
  } = useAvatarGroup({
    ...props,
    ref,
  });

  return (
    <Component {...getAvatarGroupProps()}>
      <AvatarGroupProvider value={context}>
        {clones}
        {remainingCount > 0 && renderCount(remainingCount)}
      </AvatarGroupProvider>
    </Component>
  );
});

AvatarGroup.displayName = "HeroUI.AvatarGroup";

export default AvatarGroup;
