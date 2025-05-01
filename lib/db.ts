import { PrismaClient } from "../lib/generated/prisma";

const prismaSingleton = () => {
    return new PrismaClient();
};

export const db = prismaSingleton();