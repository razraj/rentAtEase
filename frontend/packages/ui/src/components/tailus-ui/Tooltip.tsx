import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { tooltip, type TooltipProps } from "@tailus/themer";
import React from "react";

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & TooltipProps
>(
  (
    { className, fancy = false, inverted = true, sideOffset = 4, ...props },
    ref
  ) => {
    const { content } = tooltip();

    if (fancy && inverted) {
      throw new Error("The fancy and inverted props cannot be used together.");
    }

    return (
      <TooltipPrimitive.Content
        sideOffset={sideOffset}
        className={content({ fancy, inverted, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
TooltipContent.displayName = "TooltipContent";

const TooltipArrow = React.forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow> & TooltipProps
>(({ fancy, inverted, className, ...props }, ref) => {
  const { arrow } = tooltip();

  if (fancy && inverted) {
    throw new Error("The fancy and inverted props cannot be used together.");
  }

  return (
    <TooltipPrimitive.Arrow
      className={arrow({ fancy, inverted, className })}
      {...props}
    />
  );
});
TooltipArrow.displayName = "TooltipArrow";

export {
  TooltipArrow as Arrow,
  TooltipContent as Content,
  TooltipPortal as Portal,
  TooltipProvider as Provider,
  TooltipRoot as Root,
  TooltipTrigger as Trigger,
};
