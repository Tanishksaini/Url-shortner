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


const Header = () => {
    const navigate=useNavigate();
    const user= false;

  return (
    <nav className="p-4 flex justify-between items-center">
        <Link to="/">
        <img src="/logo.png" className="h-16" alt="Trimrr Logo" />
        </Link>

        <div>
    { !user?<Button  onClick={()=>{navigate("/Auth") }}>Login</Button>:(
      <DropdownMenu>
      <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>TS</AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tanishk Saini</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <Link2 className='mr-4 h-4 w-4'/>My Links</DropdownMenuItem>
        <DropdownMenuItem className="text-red-400">
          <LogOut className='mr-4 h-4 w-4'/><span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
    )}
        </div>
    </nav>
  )
}

export default Header