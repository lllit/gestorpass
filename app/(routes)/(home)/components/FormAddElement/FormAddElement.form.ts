"use client"

import { z } from "zod";

/*
export const formSchema = z.object({
    typeElement: z.string().min(2).max(50),
    isFavourite: z.boolean().default(false),
    name: z.string().min(2).max(50),
    directory: z.string().min(2).max(50),
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    urlWebsite: z.string().min(2).max(50),
    notes: z.string(),
    userId: z.string(),
});
*/

export const formSchema = z.object({
    typeElement: z.string(),
    isFavourite: z.boolean(),
    name: z.string(),
    directory: z.string(),
    username: z.string(),
    password: z.string(),
    urlWebsite: z.string(),
    notes: z.string(),
    userId: z.string(),

});
