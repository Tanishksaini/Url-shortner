import React, { useEffect, useState } from "react";
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
import { Eye, EyeOff } from "lucide-react";
import Error from "./Error";
import * as Yup from "yup";
import useFetch from "@/hooks/useFetch";
import { login } from "@/DB/apiAuth";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const{data, loading , error,fn:fnLogIn}=useFetch(login,formdata);
  useEffect(()=>{
  console.log(data);
  },[data,error])
  const handleLogIn = async () => {
    console.log("hii");
    setErrors([]);
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
          password: Yup.string()
          .required('Password is required').min(6, 'Password must be at least 6 characters long'),
      });
     
      await schema.validate(formdata, { abortEarly: false });
      await fnLogIn();
    } catch (e) {
      const newErrors = {};

      e?.inner?.forEach((err) => {
        newErrors[err.path] = err.message;
        
      });

      setErrors(newErrors);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>LogIn</CardTitle>
        <CardDescription>To your account have if you have one</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1 mb-2  w-[100%]">
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            onChange={handleChangeInput}
          />
          {errors.email && <Error message={errors.email} />}
        </div>
        <div className="space-y-2 flex justify-between relative w-[100%] mb-2">
          <Input
          name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleChangeInput}
            placeholder="Enter your password"
            onInput={handlePasswordInput}
          />
          <span
            onClick={handleTogglePassword}
            style={{
              position: "absolute",
              cursor: "pointer",
              right: "10px",
            }}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </span>
        </div>
        {errors.password && <Error message={errors.password} />}
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogIn}>
          {loading ? <ScaleLoader /> : "LogIn"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LogIn;
