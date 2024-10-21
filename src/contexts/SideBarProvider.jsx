import { createContext, useState } from 'react';

export const SidaBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidaBarContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SidaBarContext.Provider>
    );
};
