import { createContext, useContext, useState } from "react";

interface ContactContextType {
  open: boolean;
  openContact: () => void;
  closeContact: () => void;
}

const ContactContext = createContext<ContactContextType>({
  open: false,
  openContact: () => {},
  closeContact: () => {},
});

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactContext.Provider
      value={{ open, openContact: () => setOpen(true), closeContact: () => setOpen(false) }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);
