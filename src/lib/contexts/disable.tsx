
import React, { createContext, useContext } from "react";
export const DisableContext = createContext<boolean>(true);

export default function DisableProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const disable = useContext(DisableContext);

    return (
        <DisableContext.Provider value={disable}>
            {children}
        </DisableContext.Provider>
    );
};