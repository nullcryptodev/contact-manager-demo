import { cn } from "@/utils/utils";
import { ChevronUp } from "lucide-react";
import { FC } from "react";


const ContactTags: FC = () => {
  const tags = [
    { title: 'All contacts',   value: '117' },
    { title: 'Developers',     value: '42' },
    { title: 'Team',           value: '8' },
    { title: 'Friends',        value: '33' },
    { title: 'Other Contacts', value: '34' },
  ];

  const sources = [
    { title: 'Gmail',   value: '29' },
    { title: 'iCloud',  value: '8' },
    { title: 'Outlook', value: '17' },
  ];

  return (
    <div className="bg-card rounded-3xl p-2 flex flex-col gap-4">
      <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-full cursor-pointer duration-150">
        <h1 className="text-xs font-semibold uppercase">
          Contact Tags
        </h1>

        <ChevronUp className="size-4" />
      </div>

      <div className="text-sm space-y-2">
        {tags.map((item, index) => (
          <div
            key={index}
            className={cn(
              'p-2 rounded-full cursor-pointer flex items-center justify-between duration-150',
              index === 0 ? 'bg-blue-600 text-neutral-50 font-semibold hover:bg-blue-500' : 'text-muted-foreground/50 hover:text-muted-foreground hover:bg-white/5',
              ''
            )}
          >
            {item.title}

            <div className={cn(
              "p-1 text-xs font-medium rounded-full",
              index === 0 ? 'bg-neutral-50 text-neutral-950' : 'bg-muted-foreground/10'
            )}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center p-2 hover:bg-white/5 rounded-full cursor-pointer duration-150">
        <h1 className="text-xs font-semibold uppercase">
          Synced Sources
        </h1>

        <ChevronUp className="size-4" />
      </div>

      <div className="text-sm space-y-2">
        {sources.map((item, index) => (
          <div
            key={index}
            className={cn(
              'p-2 rounded-full cursor-pointer flex items-center justify-between duration-150',
              'text-muted-foreground/50 hover:text-muted-foreground hover:bg-white/5',
              ''
            )}
          >
            {item.title}

            <div className={cn(
              "p-1 text-xs font-medium rounded-full",
              'bg-muted-foreground/10'
            )}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactTags;