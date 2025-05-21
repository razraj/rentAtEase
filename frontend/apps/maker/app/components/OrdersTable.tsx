// import { faker } from "@faker-js/faker";
import { Avatar, Badge, Button, Card, DropdownMenu } from "@repo/ui/tailus-ui";
import { Text, Title } from "@repo/ui/tailus-ui/typography";
import { Archive, EllipsisVertical, Pencil, Trash, User } from "lucide-react";
import useSWR from "swr";

interface order {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  status?: string;
  date?: string;
  product: string;
  revenue?: string;
  orders?: string;
  checked?: boolean;
}

// const orders: order[] = Array.from({ length: 8 }, (_, i) => ({
//   id: i,
//   name: faker.person.fullName(),
//   email: faker.internet.email(),
//   avatarUrl: faker.image.avatar(),
//   date: faker.date.past().toLocaleDateString("en-US"),
//   status: "Paid",
//   product: faker.commerce.productName(),
//   revenue: `$${faker.finance.amount(100, 1000, 2)}`,
//   orders: faker.number.int(20).toString(),
// }));

const orders = [
  {
    id: 0,
    name: "Merle Walsh",
    email: "Lucienne_Glover@hotmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/74341186",
    date: "5/16/2024",
    status: "Paid",
    product: "Sleek Bronze Chair",
    revenue: "$130.78",
    orders: "14",
  },
  {
    id: 1,
    name: "Jody Jacobs",
    email: "Saul99@yahoo.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/91123571",
    date: "2/25/2024",
    status: "Paid",
    product: "Luxurious Frozen Hat",
    revenue: "$699.79",
    orders: "1",
  },
  {
    id: 2,
    name: "Carolyn Mann",
    email: "Camylle63@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/97756180",
    date: "7/31/2024",
    status: "Paid",
    product: "Sleek Granite Tuna",
    revenue: "$650.36",
    orders: "12",
  },
  {
    id: 3,
    name: "Jennie Wiza",
    email: "Merle_Green@hotmail.com",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1016.jpg",
    date: "12/2/2024",
    status: "Paid",
    product: "Handcrafted Metal Bike",
    revenue: "$941.36",
    orders: "5",
  },
  {
    id: 4,
    name: "Dave Cummerata",
    email: "Moshe_Friesen@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/50537143",
    date: "5/21/2024",
    status: "Paid",
    product: "Gorgeous Cotton Shoes",
    revenue: "$589.65",
    orders: "20",
  },
  {
    id: 5,
    name: "Miss Colleen Lindgren",
    email: "Doyle_Frami@gmail.com",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1240.jpg",
    date: "12/19/2024",
    status: "Paid",
    product: "Fantastic Bronze Shoes",
    revenue: "$745.57",
    orders: "19",
  },
  {
    id: 6,
    name: "Angel Keebler Sr.",
    email: "Isobel80@gmail.com",
    avatarUrl: "https://avatars.githubusercontent.com/u/43226755",
    date: "3/30/2024",
    status: "Paid",
    product: "Handmade Granite Car",
    revenue: "$698.19",
    orders: "10",
  },
  {
    id: 7,
    name: "Jenna Lehner",
    email: "Lucile_Wolf-Kunze12@yahoo.com",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/498.jpg",
    date: "7/21/2024",
    status: "Paid",
    product: "Sleek Metal Pants",
    revenue: "$901.44",
    orders: "1",
  },
];

const colors = [
  "primary",
  "secondary",
  "accent",
  "danger",
  "warning",
  "success",
  "info",
  "gray",
];
type Color =
  | "primary"
  | "secondary"
  | "accent"
  | "danger"
  | "warning"
  | "success"
  | "info"
  | "gray";

function getRandomColor(): Color {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex] as Color;
}

function getInitials(name: string): string {
  const parts = name.split(" ");
  let initials = "";
  for (let i = 0; i < Math.min(2, parts.length); i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      initials += parts[i][0];
    }
  }
  return initials.toUpperCase();
}

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((r) => r.json());

export const Orders = () => {
  const getOrder = () => {
    const { data, error, isLoading } = useSWR(
      "https://67d5609cd2c7857431f038d6.mockapi.io/api/v1/articles",
      fetcher
    );
    if (data) return data;
    if (error) return [];
    if (isLoading) return [];
  };

  // const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Card variant="outlined" className="overflow-x-auto lg:overflow-clip">
      <div className="sticky left-0 mb-6">
        <Title as="h2" size="lg" weight="medium">
          Orders
        </Title>
        <Text size="sm" className="mb-0 mt-1">
          New users by First user primary channel group (Default Channel Group)
        </Text>
      </div>
      <table className="min-w-max table-auto border-collapse space-y-1 sm:min-w-full">
        <thead>
          <tr className="text-sm text-[--title-text-color] *:bg-[--ui-soft-bg] *:p-3 *:text-left *:font-medium">
            <th className="rounded-l-[--card-radius]">#</th>
            <th>Date</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Revenue</th>
            <th className="rounded-r-[--card-radius]"></th>
          </tr>
        </thead>
        <tbody>
          {getOrder().map((order, index) => (
            <tr
              className="group items-center border-b text-sm text-[--body-text-color] *:p-3 hover:bg-gray-50 has-[[data-state='checked']]:bg-[--ui-soft-bg] has-[[data-state='open']]:bg-gray-50 dark:hover:bg-gray-500/5 dark:has-[[data-state='open']]:bg-gray-500/5"
              key={order.id}
            >
              <td>#{2053 + index}</td>
              <td>{order.date}</td>
              <td>
                <Badge
                  variant="soft"
                  intent="success"
                  size="xs"
                  className="bg-opacity-50"
                >
                  {order.status}
                </Badge>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <Avatar.Root size="xxs">
                    <Avatar.Image src={order.avatarUrl} alt={order.name} />
                    <Avatar.Fallback
                      variant="soft"
                      intent={getRandomColor()}
                      className="text-sm"
                    >
                      {getInitials(order.name)}
                    </Avatar.Fallback>
                  </Avatar.Root>
                  {order.name}
                </div>
              </td>
              <td>{order.product}</td>
              <td>{order.revenue}</td>
              <td>
                <DropdownMenu.Root modal={false}>
                  <DropdownMenu.Trigger asChild>
                    <Button.Root
                      variant="ghost"
                      size="xs"
                      intent="gray"
                      className="ml-auto"
                    >
                      <Button.Icon size="xs" type="only">
                        <EllipsisVertical />
                      </Button.Icon>
                    </Button.Root>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      data-shade="glassy"
                      intent="gray"
                      mixed
                      variant="soft"
                      side="bottom"
                      sideOffset={6}
                      align="end"
                    >
                      <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                          <User className="size-4" />
                        </DropdownMenu.Icon>
                        View profile
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                          <Pencil className="size-4" />
                        </DropdownMenu.Icon>
                        Edit
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <DropdownMenu.Icon>
                          <Archive className="size-4" />
                        </DropdownMenu.Icon>
                        Archive
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item intent="danger">
                        <DropdownMenu.Icon>
                          <Trash className="size-4" />
                        </DropdownMenu.Icon>
                        Delete
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*
            
            <div className="mb-1 flex min-w-max gap-4 rounded-[--btn-radius] border bg-[--ui-soft-bg] px-4 py-3 sm:w-max sm:min-w-full dark:bg-gray-800/50">
                <div className="flex w-full gap-4 text-sm">
                    <div className="flex items-center gap-4">
                        <div className="w-20 text-gray-950 dark:text-white">#</div>
                        <div className="w-24 text-gray-950 dark:text-white">Date</div>
                        <div className="w-24 text-gray-950 dark:text-white">Status</div>
                        <div className="w-56 text-gray-950 dark:text-white">Customer</div>
                    </div>

                    <div className="ml-auto flex w-96 items-center gap-4">
                        <div className="w-60 text-gray-950 dark:text-white">Product</div>
                        <div className="w-20 text-gray-950 dark:text-white">Revenue</div>
                    </div>
                </div>
            </div>
            <div className="min-w-max sm:w-max sm:min-w-full">
                {orders.map((order, index) => (
                    <div className="group flex items-center border-b border-dashed px-4 last:border-none hover:rounded-[--btn-radius] hover:border-transparent hover:bg-[--ui-soft-bg] has-[[data-state='open']]:rounded-[--btn-radius] has-[[data-state='open']]:bg-[--ui-soft-bg]" key={order.id}>
                        <div className="flex w-full select-none items-center justify-between gap-4 py-2.5 font-normal" key={order.id}>
                            <div className="flex items-center gap-4">
                                <div className="line-clamp-1 block w-20 text-sm text-gray-600 dark:text-gray-400">#{2053 + index}</div>
                                <div className="line-clamp-1 block w-24 text-sm text-gray-600 dark:text-gray-400">{order.date}</div>
                                <div className="line-clamp-1 w-24">
                                    <Badge variant="soft" intent="success" size="xs" className="bg-opacity-50">
                                        {order.status}
                                    </Badge>
                                </div>
                                <div className="flex w-56 items-center gap-3">
                                    <Avatar.Root size="xs">
                                        <Avatar.Image src={order.avatarUrl} alt={order.name} />
                                        <Avatar.Fallback variant="soft" intent={getRandomColor()} className="text-sm">
                                            {getInitials(order.name)}
                                        </Avatar.Fallback>
                                    </Avatar.Root>
                                    <div className="line-clamp-1 w-44 text-sm text-[--title-text-color] group-hover:text-primary-600 dark:group-hover:text-primary-400">{order.name}</div>
                                </div>
                            </div>
                            <div className="ml-auto flex w-96 items-center justify-between gap-4">
                                <div className="line-clamp-1 block w-60 text-left text-sm text-gray-600 dark:text-gray-400">{order.product}</div>
                                <div className="line-clamp-1 block w-20 text-sm text-gray-600 dark:text-gray-400">{order.revenue}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
    </Card>
  );
};

export default Orders;
