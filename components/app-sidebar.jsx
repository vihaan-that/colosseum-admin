import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Sample data for the navigation menu
const data = {
  navMain: [
    {
      title: "User Management",
      url: "#",
      items: [
        { title: "Manage Organisers", url: "#" },
        { title: "Manage Players", url: "#" },
        { title: "Ban History", url: "#" },
      ],
    },
    {
      title: "Tournament Management",
      url: "#",
      items: [
        { title: "Pending Tournaments", url: "#" },
        { title: "Active and Completed Tournaments", url: "#" },
      ],
    },
    {
      title: "Reports Management",
      url: "#",
      items: [
        { title: "Reported Teams/Organisers", url: "#" },
        { title: "Reports Analytics", url: "#" },
      ],
    },
    {
      title: "Platform Metrics",
      url: "#",
      items: [
        { title: "User Activity", url: "#" },
        { title: "Growth Analytics", url: "#" },
      ],
    },
    {
      title: "Financial Overview",
      url: "#",
      items: [
        { title: "Revenue Dashboard", url: "#" },
        { title: "Prize Pool Management", url: "#" },
      ],
    },
    {
      title: "Admin Tools",
      url: "#",
      items: [
        { title: "Data Export", url: "#" },
        { title: "Audit Log", url: "#" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-medium">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>{subItem.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
