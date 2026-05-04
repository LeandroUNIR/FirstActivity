import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export function GlobalProvider({ children }) {

    const [bookId,setBookId] = useState(0);

    console.log('[GlobalProvider] render', { bookId });

    return (
        <GlobalContext.Provider value={{ bookId, setBookId }}>
            {children}
        </GlobalContext.Provider>
    );
}