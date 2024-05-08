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
            <CardFooter className="flex flex-row items-start justify-center gap-1">
              <span className="text-xs">New member?</span>
              <TabsList
                className="h-fit bg-transparent p-0 text-xs text-card-foreground ring-offset-0 transition-none"
                asChild
              >
                <TabsTrigger value="signup" asChild>
                  <span>Register Here</span>
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
              <div>adfsa</div>
            </CardContent>
            <CardFooter>
              <Button>Sign Up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default LoginRegister;
