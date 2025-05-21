import * as Popover from "@radix-ui/react-popover";
import React from "react";
import { popover, type PopoverProps } from "@tailus/themer";

const PopoverRoot = Popover.Root;
const PopoverTrigger = Popover.Trigger;
const PopoverAnchor = Popover.Anchor;
const PopoverPortal = Popover.Portal;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof Popover.Content>,
  React.ComponentPropsWithoutRef<typeof Popover.Content> & PopoverProps
>(({ className, fancy, mixed, ...props }, forwardedRef) => {
  const { content } = popover();

  if (fancy && mixed) {
    throw new Error("The fancy and mixed props cannot be used together.");
  }

  return (
    <Popover.Content
      {...props}
      ref={forwardedRef}
      className={content({ fancy, mixed, className })}
    />
  );
});
PopoverContent.displayName = "PopoverContent";

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof Popover.Close>,
  React.ComponentPropsWithoutRef<typeof Popover.Close>
>(({ className, ...props }, forwardedRef) => {
  const { close } = popover();

  return (
    <Popover.Close
      {...props}
      ref={forwardedRef}
      className={close({ className })}
    />
  );
});
PopoverClose.displayName = "PopoverClose";

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof Popover.Arrow>,
  React.ComponentPropsWithoutRef<typeof Popover.Arrow>
>(({ className, ...props }, forwardedRef) => {
  const { arrow } = popover();
  return (
    <Popover.Arrow
      {...props}
      ref={forwardedRef}
      className={arrow({ className })}
    />
  );
});
PopoverArrow.displayName = "PopoverArrow";

export {
  PopoverRoot as Root,
  PopoverTrigger as Trigger,
  PopoverAnchor as Anchor,
  PopoverPortal as Portal,
  PopoverContent as Content,
  PopoverClose as Close,
  PopoverArrow as Arrow,
};
