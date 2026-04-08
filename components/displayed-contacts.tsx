import { FC } from "react";
import { ArrowDownAZ, Filter, Menu, Search, Star } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { cn } from "@/utils/utils";

const DisplayedContacts: FC = () => {
  // because this is a demo, we do this the long and lazy way. shhh.

  const demo_a_contacts = [
    { name: "Aiden Clarke", tags: ['Developer', 'Friends'], description: 'Freelance Software Engineer', favourite: false, image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: "Amara Patel", tags: ['Developer'], description: 'Programmer', favourite: true, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: "Alistair Wong", tags: [], description: '', favourite: false, image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: "Aria Bennett", tags: ['Team'], description: 'Team Manager', favourite: true, image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D' },
  ];

  const demo_b_contacts = [
    { name: "Benjamin Hayes", tags: ['Developer', 'Friends'], description: 'Freelance Software Engineer', favourite: false, image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: "Bianca Russo", tags: ['Developer'], description: 'Programmer', favourite: true, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: "Blake Turner", tags: [], description: '', favourite: false, image: 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: "Bryony Ellis", tags: ['Team'], description: 'Team Manager', favourite: true, image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D' },
  ];

  return (
    <div className="lg:col-span-2 bg-card rounded-3xl p-4 flex flex-col gap-4">
      <h1 className="uppercase text-muted-foreground text-xs font-semibold">
        Displayed Contacts - 117
      </h1>

      <div className="flex items-center gap-1">
        <InputGroup>
          <InputGroupInput
            placeholder="Search"
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <div className="border hover:bg-white/5 rounded-full p-2">
          <ArrowDownAZ className="size-5" />
        </div>
        <div className="border hover:bg-white/5 rounded-full p-2">
          <Filter className="size-5" />
        </div>
        <div className="border hover:bg-white/5 rounded-full p-2">
          <Menu className="size-5" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-muted-foreground/50 text-sm">
          A
        </h1>

        {demo_a_contacts.map((item, index) => (
          <div
            key={index}
            className={cn(
              'rounded-full p-1 flex items-center gap-2 cursor-pointer',
              index === 0 ? 'bg-blue-600 text-neutral-50 hover:bg-blue-500' : 'text-muted-foreground/50 hover:text-muted-foreground hover:bg-white/5',
            )}
          >
            <img src={item.image} className="size-10 rounded-full object-cover object-center"/>

            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-1">
                <h1 className="text-lg">
                  {item.name}
                </h1>

                {item.tags.map((tag_, index_) => (
                  <div
                    key={index_}
                    className={cn(
                      'text-xs p-0.5 px-2 rounded-full font-semibold',
                      index === 0 && 'bg-white/15'
                    )}
                  >
                    {tag_}
                  </div>
                ))}
              </div>
              <h2 className="text-xs">
                {item.description}
              </h2>
            </div>

            {item.favourite && (
              <div
                className={cn(
                  'ml-auto border rounded-full p-2.5'
                )}
              >
                <Star className="size-4 fill-muted-foreground"/>
              </div>
            )}
          </div>
        ))}
      </div>

      <hr />

      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-muted-foreground/50 text-sm">
          B
        </h1>

        {demo_b_contacts.map((item, index) => (
          <div
            key={index}
            className={cn(
              'rounded-full p-1 flex items-center gap-2 cursor-pointer',
              'text-muted-foreground/50 hover:text-muted-foreground hover:bg-white/5',
            )}
          >
            <img src={item.image} className="size-10 rounded-full object-cover object-center" />

            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-1">
                <h1 className="text-lg">
                  {item.name}
                </h1>

                {item.tags.map((tag_, index_) => (
                  <div
                    key={index_}
                    className={cn(
                      'text-xs p-0.5 px-2 rounded-full font-semibold',
                    )}
                  >
                    {tag_}
                  </div>
                ))}
              </div>
              <h2 className="text-xs">
                {item.description}
              </h2>
            </div>

            {item.favourite && (
              <div
                className={cn(
                  'ml-auto border rounded-full p-2.5'
                )}
              >
                <Star className="size-4 fill-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayedContacts;