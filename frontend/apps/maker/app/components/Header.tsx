import { Link, Notifications, ThemeSwitcher } from "@repo/ui";
import { Separator } from "@repo/ui/tailus-ui";
import { Title } from "@repo/ui/tailus-ui/typography";
import { BrandIcon } from "@repo/ui/utilities";
import { Crown, Pencil, ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="feedback-bg w-full top-0 z-10 border-b py-4">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex w-10">
            <BrandIcon className="mx-auto" />
          </div>
          <Title size="base" weight="medium">
            RentAtEase
          </Title>
          <Separator className="mx-4" orientation="vertical" />
        </div>
        <div className="flex gap-3">
          <Notifications />
          <ThemeSwitcher size="sm" />
        </div>
      </div>
    </header>
  );
};
