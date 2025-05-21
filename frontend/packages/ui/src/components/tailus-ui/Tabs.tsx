import * as TabsPrimitive from "@radix-ui/react-tabs";
import {
  tabs,
  type TabsIndicatorProps as IndicatorProps,
  type TabsListProps as ListProps,
} from "@tailus/themer";
import React from "react";

const { list, trigger, indicator } = tabs();

const TabsContext = React.createContext<Omit<ListProps, "variant">>({
  intent: "primary",
  size: "md",
  triggerVariant: "plain",
});

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & ListProps
>(
  (
    {
      className,
      variant = "soft",
      triggerVariant = "plain",
      intent = "primary",
      size = "md",
      ...props
    },
    forwardedRef
  ) => {
    variant = variant || "soft";

    return (
      <TabsContext.Provider value={{ triggerVariant, intent, size }}>
        <TabsPrimitive.List
          {...props}
          ref={forwardedRef}
          className={list({
            listVariant: variant,
            size,
            triggerVariant,
            className,
          })}
        />
      </TabsContext.Provider>
    );
  }
);
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentProps<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, forwardedRef) => {
  const { triggerVariant, size, intent } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={forwardedRef}
      className={trigger({ triggerVariant, size, intent, className })}
    />
  );
});
TabsTrigger.displayName = "TabsTrigger";

const TabsIndicator = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentProps<"span"> & Pick<IndicatorProps, "variant">
>(({ className, variant = "bottom", ...props }, forwardedRef) => {
  const { intent } = React.useContext(TabsContext);

  return (
    <span
      {...props}
      aria-hidden
      ref={forwardedRef}
      className={indicator({ indicatorVariant: variant, intent, className })}
    />
  );
});
TabsIndicator.displayName = "TabsIndicator";

const TabsContent = TabsPrimitive.Content;

export {
  TabsContent as Content,
  TabsIndicator as Indicator,
  TabsList as List,
  TabsRoot as Root,
  TabsTrigger as Trigger,
};
