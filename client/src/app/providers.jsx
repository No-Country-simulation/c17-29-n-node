"use client"

import { ValidationProvider } from "@/context/ValidationContext";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from 'next-themes';
import React from "react";

export const Providers = ({ children }) => {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" forcedTheme={"light"} theme="light">
                <ValidationProvider>
                    {children}
                </ValidationProvider>
            </ThemeProvider>
        </NextUIProvider>
    )
}