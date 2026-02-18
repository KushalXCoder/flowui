"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import Logo from "./logo";

const DocsSidebar = ({ tree }: any) => {
  const pathname = usePathname();

  return (
    <Sidebar className="w-[270px] shrink-0 bg-background border-r font-poppins">
      <SidebarHeader className="px-5 py-4 border-b">
        <div className="flex items-center justify-between">
          <Logo />
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="space-y-1">
          {tree.children.map((item: any) => (
            <NavItem
              key={item.url}
              item={item}
              pathname={pathname}
            />
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

const NavItem = ({ item, pathname, level = 0 }: any) => {
  const isPage = !!item.url;
  const active = pathname === item.url;

  // Section Heading (Folder)
  if (!isPage) {
    return (
      <div className={level === 0 ? "mt-6 first:mt-0" : "mt-4"}>
        <div className="px-2 mb-2 font-semibold text-foreground/80">
          {item.name}
        </div>

        {item.children?.map((child: any) => (
          <NavItem
            key={child.url ?? child.name}
            item={child}
            pathname={pathname}
            level={level + 1}
          />
        ))}
      </div>
    );
  }

  // Page Item
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={active}
        className={`
          h-8 text-sm font-normal rounded-md
          text-muted-foreground
          hover:text-foreground
          hover:bg-muted/40
          data-[active=true]:bg-muted
          data-[active=true]:text-foreground
          text-[14px]
          ${level > 0 ? "ml-3" : ""}
        `}
      >
        <Link href={item.url}>{item.name}</Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default DocsSidebar;