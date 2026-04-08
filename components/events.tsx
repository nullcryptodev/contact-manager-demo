import { FC } from "react";

const Events: FC = () => {
  const team_member_1 = 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const team_member_2 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D';
  const team_member_3 = 'https://images.unsplash.com/photo-1742119971773-57e0131095b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D';
  const team_member_4 = 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHx8MA%3D%3D';

  const tomorrow_events = [
    { title: 'Repository Maintenance', description: 'Make sure all our GitHub repos are up to date with little to no errors.', assigned: [team_member_1, team_member_2, team_member_3, team_member_4] },
    { title: 'Team Meeting', description: 'Attend team meeting with project manager.', assigned: [team_member_1] },
  ];

  return (
    <div className="lg:col-span-2 bg-card rounded-3xl p-3 flex flex-col gap-4">
      <h1 className="text-lg font-semibold">
        Events
      </h1>

      <div className="flex flex-col gap-1">
        <h1 className="text-xs text-muted-foreground/50 font-semibold">
          Tomorrow
        </h1>
        {tomorrow_events.map((item, index) => (
          <div className="py-2 px-4 bg-white/5 rounded-3xl">
            <h1 className="text-md">
              {item.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {item.description}
            </p>

            <div className="flex items-center -space-x-2 mt-2">
              {item.assigned.map((item_, index_) => (
                <img src={item_} key={index_} className="size-8 rounded-full object-cover object-center"/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;