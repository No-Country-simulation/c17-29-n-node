"use client"

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from 'next-themes';
import React from "react";

export const Providers = ({ children }) => {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" forcedTheme={"light"} theme="light">
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}