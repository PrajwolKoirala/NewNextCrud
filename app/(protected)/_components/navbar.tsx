"use client"
import React from "react"

import {usePathname} from "next/navigation"
import { Button } from "../../../components/ui/button"
import Link from "next/link"
import { UserButton } from "../../../components/auth/userbutton"
 export const Navbar = () => {

    const pathname = usePathname();
    return (
        
            <nav className="bg bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px]  shadow-sm">
                <div className="flex gap-x-2">
                <Button 
                   asChild 
                   variant={pathname === "/server" ? "default" : "outline"}
                   >
                    <Link href = "/server">
                    server
                    </Link>
                   </Button>
                   <Button 
                   asChild 
                   variant={pathname === "/client" ? "default" : "outline"}
                   >
                    <Link href = "/client">
                    client
                    </Link>
                   </Button>
                   <Button 
                   asChild 
                   variant={pathname === "/admin" ? "default" : "outline"}
                   >
                    <Link href = "/admin">
                    admin
                    </Link>
                   </Button>

                   <Button 
                   asChild 
                   variant={pathname === "/settings" ? "default" : "outline"}
                   >
                    <Link href = "/settings">
                    settings
                    </Link>
                   </Button>
                </div>
            <UserButton/>
            </nav>
      
    )
 }