import { createContext, useState } from 'react';

export const SidaBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('');

    const value = { isOpen, setIsOpen, type, setType };
    return (
        <SidaBarContext.Provider value={value}>
            {children}
        </SidaBarContext.Provider>
    );
};
