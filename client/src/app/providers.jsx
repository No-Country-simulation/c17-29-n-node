"use client"

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from 'next-themes';
import React from "react";

export const Providers = ({ children }) => {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" enableSystem={true}>
                {children}
            </ThemeProvider>
        </NextUIProvider >
    )
}