"use client";

import { Button, Input, Label } from "@repo/ui/tailus-ui";
import { Caption, Link, Title } from "@repo/ui/tailus-ui/typography";
import { signupUser } from "app/lib/features/auth/authSlice";
import { useAppDispatch } from "app/lib/hooks";
import { useFormik } from "formik";

export default function Page() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(
        signupUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <div className="h-screen flex overflow-auto text-center">
      <img
        className="fixed inset-y-0 right-0 hidden h-screen w-1/2 object-cover object-left lg:block"
        src="https://images.unsplash.com/photo-1687720657052-c026be7f388c?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <main className="inset-0 z-10 m-auto h-fit px-6 py-12 lg:absolute lg:grid lg:w-screen lg:max-w-full lg:grid-cols-2 lg:gap-32 lg:px-0">
        <div>
          <div className="mx-auto max-w-md lg:ml-auto lg:mr-0 lg:pr-12">
            <div>
              <div>
                <Title size="xl" className="mb-1 mt-12">
                  Sign Up to RentAtEase
                </Title>
              </div>

              <form
                onSubmit={formik.handleSubmit}
                className="mx-auto mt-8 space-y-6"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <Label size="sm">First Name</Label>
                      </div>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        size="md"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <Label size="sm" htmlFor="email">
                          Last Name
                        </Label>
                      </div>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        size="md"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <Label size="sm" htmlFor="email">
                          Email
                        </Label>
                      </div>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        size="md"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <Label size="sm" htmlFor="password">
                          Password
                        </Label>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        minLength={8}
                        required
                        size="md"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>
                  </div>
                </div>
                <Button.Root typeof="submit" className="w-full">
                  <Button.Label>Sign In</Button.Label>
                </Button.Root>
              </form>
            </div>

            <div className="mt-12">
              <Caption className="my-0" size="sm" align="center">
                Already have an account ?{" "}
                <Link
                  intent="neutral"
                  size="sm"
                  variant="underlined"
                  href="/login"
                >
                  Login
                </Link>
              </Caption>
            </div>
          </div>
        </div>
      </main>

      {/* <LeftSidebar />
        {isMenuOpen && <SidebarDetails />} */}
      {/* Main */}
      {/* <main
          className={twMerge(
            "max-w-[calc(100vw-2.5rem)] flex-grow border border-b-0 bg-[--ui-bg] shadow-md lg:mr-1  lg:mb-1 lg:mt-1 lg:rounded-t-[--card-radius]  lg:rounded-b-[--card-radius]"
          )}
        ></main> */}
    </div>
  );
}
