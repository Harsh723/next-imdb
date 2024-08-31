'use-client'

import { ThemeProvider } from "next-themes"
import React from "react"

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none ">
                {children}
            </div>
        </ThemeProvider>
    )
}

export default Providers