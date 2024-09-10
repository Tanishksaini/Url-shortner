import React from 'react'
import {  useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'


const Auth = () => {
  const[searchParams]=useSearchParams()
  return (
    <div className='mt-32 flex flex-col items-center gap-10'>
      <h1 className='text-5xl font-extrabold'>{searchParams.get("createNew")?"Hold Up ! Lets Login frist....":"Login/SignUp"
}</h1>
<Tabs defaultValue="Login" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="Login">LogIn</TabsTrigger>
    <TabsTrigger value="SignUp">SignUp</TabsTrigger>
  </TabsList>
  <TabsContent value="Login"><LogIn/></TabsContent>
  <TabsContent value="SignUp"><SignUp/></TabsContent>
</Tabs>

    </div>
  )
}

export default Auth