"use client"
import { FC } from "react";
import { Bean, Bell, Settings, User } from "lucide-react";

import { cn } from "@/utils/utils";

const NavigationBar: FC = () => {
  const navigation_items = [
    { title: 'Contacts',  action: () => { } },
    { title: 'Events', action: () => { } },
    { title: 'Calandar',      action: () => { } },
  ];
  
  return (
    <div className="flex w-full items-center bg-card p-4 rounded-3xl justify-between">
      <div className="flex items-center justify-center gap-4 cursor-default">
        <Bean/>
        <div className="text-center flex flex-col">
          <h1 className="font-bold tracking-widest text-xl">
            BEAN.
          </h1>
          <h2 className="text-xs text-primary font-bold">
            DEMO
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2 text-center">
        {navigation_items.map((item, index) => (
          <div
            key={index}
            className={cn(
              'p-2 px-4 rounded-full cursor-pointer duration-150',
              index === 0 ? 'bg-blue-600 font-semibold hover:bg-blue-500' : 'hover:bg-white/5',
            )}
            onClick={item.action}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="p-2 bg-white/5 hover:bg-white/10 duration-150 rounded-full">
          <Bell />
        </div>
        <div className="p-2 bg-white/5 hover:bg-white/10 duration-150 rounded-full">
          <Settings />
        </div>
      </div>
      
    </div>
  );
};

export default NavigationBar;