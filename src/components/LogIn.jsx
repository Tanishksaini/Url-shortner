import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScaleLoader } from "react-spinners";
import { Eye, EyeOff, EyeOffIcon } from "lucide-react";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>LogIn</CardTitle>
        <CardDescription>To your account have one</CardDescription>
      </CardHeader>
      <CardContent classname="space-y-2">
        <div className="space-y-1 mb-2  w-[100%]">
          <Input name="email" type="email" placeholder="Enter Your Email" />
        </div>
        <div className="space-y-2 flex justify-between relative w-[100%] mb-2">
      <Input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      
      />
      <span 
      
        onClick={handleTogglePassword}
        style={{
          position: 'absolute',
          cursor: 'pointer',
           right:'10px',
        }}
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </span>
    </div>
      </CardContent>
      <CardFooter>
        <Button>{true ? <ScaleLoader /> : "LogIn"}LogIn</Button>
      </CardFooter>
    </Card>
  );
};

export default LogIn;
