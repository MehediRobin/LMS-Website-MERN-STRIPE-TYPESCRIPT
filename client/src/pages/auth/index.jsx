import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  function handleTabChange(value) {
    setActiveTab(value);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center px-4 border-b-2 lg:px-6 h-14">
        <Link to={"/"} className="flex items-center justify-center">
          <GraduationCap className="w-8 h-8 mr-4" />
          <span className="text-xl font-extrabold">EduLearn</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleTabChange}
          className="w-full max-w-md"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">Sign In</TabsContent>
          <TabsContent value="signup">Sign Up</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthPage;
