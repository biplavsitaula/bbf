import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { RiMenu3Fill } from "react-icons/ri";

export default function NavBar() {
  if (window.innerWidth > 426) {
    return (
      <nav className="z-10 flex justify-between px-6 py-8 bg-background/80 backdrop-blur-lg sticky top-0 w-full">
        <div className="relative h-10 w-10 flex items-center gap-2">
          <img
            src={"/gts-logo.svg" || "https://placehold.co/40x40"}
            className="object-contain w-full h-full"
          />
          <h2 className="text-primary font-semibold text-2xl">ByteBornFire</h2>
        </div>
        <NavigationOptions/>
      </nav>
    );
  } else {
    return (
      <nav className="z-10 flex justify-between px-6 py-8 bg-background/80 backdrop-blur-lg sticky top-0 w-full">
        <span className="flex gap-2">
          <img src={"/gts-logo.svg"} />
          <h2 className="text-primary font-semibold text-2xl">BBF</h2>
        </span>
        <Drawer>
          <DrawerTrigger><RiMenu3Fill size={30}/></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>
                <NavigationOptions className="font-semibold text-primary"/>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </nav>
    );
  }
}

const NavigationOptions=({className ="flex font-semibold text-primary"})=>{
  return(
    <div className={className}>
          <NavigationMenu>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background text-primary border">
                  <NavigationMenuLink>Web</NavigationMenuLink>
                  <NavigationMenuLink>Mobile</NavigationMenuLink>
                  <NavigationMenuLink>Desktop</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuLink href="/blogs">Blogs</NavigationMenuLink>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuLink href="/contacts">Contacts</NavigationMenuLink>
          </NavigationMenu>
        </div>
  )
}