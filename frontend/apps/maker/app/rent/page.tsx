"use client";
import { Product, ProductCard } from "@/components/ProductCard";
import { Button, Input, Label, Separator } from "@repo/ui/tailus-ui";
import { Caption } from "@repo/ui/tailus-ui/typography";

export default function Page() {
  const products: Product[] = [
    {
      name: "TLS Knit Cap",
      category: "knit-cap",
      shortDescription: "Some description goes here",
      price: 32,
      oldPrice: 56,
      image: "/images/bonnet.webp",
    },
    {
      name: "TLS Dress",
      category: "knit-cap",
      shortDescription: "Some description goes here",
      price: 69,
      oldPrice: 119,
      image: "/images/dress.webp",
    },
    {
      name: "Clein Sports Bottle",
      category: "flask",
      shortDescription: "Some description goes here",
      price: 22,
      image: "/images/gourde1.webp",
    },
    {
      name: "Nike Sports Bottle",
      category: "flask",
      shortDescription: "Some description goes here",
      price: 29,
      image: "/images/gourde2.webp",
    },
    {
      name: "LA T-Shirt",
      category: "t-shirt",
      shortDescription: "Some description goes here",
      price: 19,
      image: "/images/t-shirt1.webp",
    },
    {
      name: "Nike custom T-Shirt",
      category: "t-shirt",
      shortDescription: "Some description goes here",
      price: 26,
      oldPrice: 39,
      image: "/images/t-shirt2.webp",
    },
    {
      name: "CAL Long Sleeve",
      category: "longslive t-shirt",
      shortDescription: "Tailus UI California mood t-shirt",
      price: 26,
      oldPrice: 39,
      image: "/images/t-shirt-l1.webp",
    },
    {
      name: "705 Long Sleeve",
      category: "longslive t-shirt",
      shortDescription: "Tailus UI Lubumbashi mood t-shirt",
      price: 26,
      oldPrice: 39,
      image: "/images/t-shirt-l2.webp",
    },
    {
      name: "CAL Long Sleeve",
      category: "longslive t-shirt",
      shortDescription: "Tailus UI California mood t-shirt",
      price: 26,
      oldPrice: 39,
      image: "/images/t-shirt-l3.webp",
    },
  ];
  return (
    <>
      <section className="pt-24 lg:pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <form className="mx-auto mt-8 space-y-6">
            <div className="space-y-6 rounded-[--btn-radius] shadow-sm shadow-gray-500/5">
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-3">
                  <div className="space-y-2.5">
                    <Label size="sm" htmlFor="firstname">
                      First name
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      type="text"
                      required
                      variant="outlined"
                      size="md"
                    />
                  </div>

                  <div className="space-y-2.5">
                    <Label size="sm" htmlFor="lastname">
                      Last name
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      type="text"
                      required
                      variant="outlined"
                      size="md"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label size="sm" htmlFor="email">
                    Your email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    variant="outlined"
                    size="md"
                  />
                </div>

                <div className="space-y-2.5">
                  <Label size="sm" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    variant="outlined"
                    size="md"
                  />
                </div>
              </div>
            </div>

            <Button.Root className="w-full">
              <Button.Label>Create Account</Button.Label>
            </Button.Root>
          </form>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
