import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Login } from "./components/login";
import { SignUp } from "./components/sign-up";

export const Auth01 = () => {
  return (
    <Tabs defaultValue="login" className="w-100">
      <TabsList>
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Login />
      </TabsContent>
      <TabsContent value="signup">
        <SignUp />
      </TabsContent>
    </Tabs>
  )
}