import { Film, MessageCircle, Phone, Share, Video } from "lucide-react";
import { FC } from "react";


const ContactDetails: FC = () => {
  const demo_user = {
    name: "Aiden Clarke",
    tags: ['Developer', 'Friends'],
    description: 'Freelance Software Engineer',
    favourite: false,
    image: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  return (
    <div className="lg:col-span-2 bg-card rounded-3xl p-3 space-y-4">
      <div className="bg-white/5 p-4 rounded-3xl flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <img src={demo_user.image} className="size-20 rounded-full object-cover object-center" />

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl">
              {demo_user.name}
            </h1>
            <h2 className="text-sm text-muted-foreground">
              {demo_user.description}
            </h2>

            <div className="flex items-center gap-2">
              {demo_user.tags.map((item, index) => (
                <div
                  key={index}
                  className="text-xs bg-blue-600 rounded-full px-2 py-0.5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <div className="bg-white/10 hover:bg-white/15 duration-150 p-4 m-auto rounded-full">
            <Phone className="fill-neutral-50"/>
          </div>
          <div className="bg-white/10 hover:bg-white/15 duration-150 p-4 m-auto rounded-full">
            <Video className="fill-neutral-50" />
          </div>
          <div className="bg-white/10 hover:bg-white/15 duration-150 p-4 m-auto rounded-full">
            <MessageCircle className="fill-neutral-50" />
          </div>
          <div className="bg-white/10 hover:bg-white/15 duration-150 p-4 m-auto rounded-full">
            <Share />
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="py-2 px-4 bg-white/5 rounded-3xl flex flex-col gap-1">
          <h1 className="text-sm text-muted-foreground/50">
            Personal
          </h1>
          <p>
            +1 234-567-789-0
          </p>
        </div>
        <div className="py-2 px-4 bg-white/5 rounded-3xl flex flex-col gap-1">
          <h1 className="text-sm text-muted-foreground/50">
            Work
          </h1>
          <p>
            +1 234-567-789-0
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;