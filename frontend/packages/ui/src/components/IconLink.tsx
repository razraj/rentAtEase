"use client";

import React from "react";
import type { ReactNode } from "react";
import { Button } from "./tailus-ui";
import { Tooltip } from "./tailus-ui";

export const IconLink = ({
  isActive = false,
  size = "md",
  children,
  label,
  link,
  onClick,
}: {
  isActive?: boolean;
  size?: "md" | "xs" | "sm" | "lg" | "xl";
  children?: ReactNode;
  label?: string;
  link?: string;
  onClick?: () => void;
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger asChild>
          <Button.Root
            href={link}
            onClick={onClick}
            variant={isActive ? "outlined" : "ghost"}
            intent="gray"
            className={
              isActive
                ? "dark:bg-gray-500/10 dark:[--btn-border-color:theme(colors.transparent)]"
                : ""
            }
            aria-label={label}
            size={size}
          >
            <Button.Icon type="only">{children}</Button.Icon>
          </Button.Root>
        </Tooltip.Trigger>
        <Tooltip.Content
          className="z-50"
          sideOffset={8}
          align="start"
          side="right"
          fancy={false}
          inverted
        >
          {label}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
