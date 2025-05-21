import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Caption, Text } from "@repo/ui/tailus-ui/typography";
import Image from "next/image";
import type React from "react";

export interface Product {
  name: string;
  shortDescription: string;
  category: string;
  price: number;
  priceUnit?: string;
  oldPrice?: number;
  image: string;
}

export const ProductCard: React.FC<Product> = ({
  name,
  shortDescription,
  price,
  priceUnit = "$",
  oldPrice,
  image,
}) => {
  return (
    <div className="group block space-y-3">
      <AspectRatio
        ratio={9 / 12}
        className="relative overflow-hidden rounded-[--card-radius] before:absolute before:inset-0 before:z-[1] before:bg-gray-100 before:mix-blend-darken"
      >
        <img
          className="size-full object-cover duration-300 group-hover:scale-105"
          src={image}
          alt={shortDescription}
        />
      </AspectRatio>
      <div className="px-0.5">
        <div className="flex justify-between">
          <Caption as="p" weight="medium" neutral>
            {name}
          </Caption>
          <div className="flex gap-2">
            {oldPrice && (
              <Caption as="p" className="line-through">
                {priceUnit + oldPrice}
              </Caption>
            )}
            <Text className="my-0" size="sm">
              {priceUnit + price}
            </Text>
          </div>
        </div>
        <Caption as="p">{shortDescription}</Caption>
      </div>
    </div>
  );
};
