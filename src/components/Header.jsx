import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link2, LogOut } from 'lucide-react'
import { logout } from '@/DB/apiAuth'
import useFetch from '@/hooks/useFetch'
import { UrlState } from '@/context'


const Header = () => {
  const {loading, fn: fnLogout} = useFetch(logout);
    const navigate=useNavigate();
    const {user, fetchUser} = UrlState();
    

  return (
    <>
    <nav className="p-4 flex justify-between items-center">
        <Link to="/">
        <img src="/logo.png" className="h-16" alt="Trimrr Logo" />
        </Link>

        <div>
    { !user?<Button  onClick={()=>{navigate("/Auth") }}>Login</Button>:(
      <DropdownMenu>
      <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
        <Avatar>
  <AvatarImage src={user?.user_metadata?.profile_pic} />
  <AvatarFallback>TS</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem> 
          <Link to="/dashboard" className='flex'><Link2 className='mr-4 h-4 w-4'/>My Links</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-400"
         onClick={() => {
          fnLogout().then(() => {
            fetchUser();
            navigate("/auth");
          });
        }}>
          <LogOut className='mr-4 h-4 w-4'/><span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
    )}
        </div>
    </nav>
     {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
     </>
  )
}

export default Header