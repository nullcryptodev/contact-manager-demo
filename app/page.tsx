import ContactDetails from "@/components/contact-details";
import ContactTags from "@/components/contact-tags";
import DisplayedContacts from "@/components/displayed-contacts";
import Events from "@/components/events";
import NavigationBar from "@/components/nav-bar";

import { cn } from "@/utils/utils";

export default function Home() {
  // not really optimised for mobile view, soon though.

  return (
    <div className="p-4">
      <NavigationBar/>

      <div className={cn(
        'grid gap-1 py-1 items-start',
        'lg:grid-cols-6'
      )}>
        <ContactTags/>
        <DisplayedContacts/>
        <div className="grid lg:grid-cols-4 lg:col-span-3 gap-1 items-start">

          <ContactDetails />
          <Events />
        </div>
      </div>
    </div>
  );
};
