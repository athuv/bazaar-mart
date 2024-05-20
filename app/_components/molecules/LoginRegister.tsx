import Link from "next/link";

import { Button } from "@/app/_components/atoms/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/atoms/shadcn/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/atoms/shadcn/tabs";

import LoginForm from "@/app/_components/molecules/LoginForm";
import SignupForm from "@/app/_components/molecules/SignupForm";

function LoginRegister() {
  return (
    <div className="flex w-[32rem] items-center justify-center px-2 py-2">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Welcome to Bazaar Mart, Please login.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <LoginForm />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center">
              <Link className="text-xs hover:underline" href="./">
                Reset your password
              </Link>
              <TabsList
                className="h-fit bg-transparent p-0 text-xs text-card-foreground ring-offset-0 transition-none"
                asChild
              >
                <TabsTrigger value="signup" asChild>
                  <div className="flex gap-1">
                    <span className="text-xs">New member?</span>
                    <span className="cursor-pointer hover:underline">
                      Register Here
                    </span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create your Bazaar Mart Account Here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <SignupForm />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default LoginRegister;
