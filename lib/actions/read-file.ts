"use server";

import fs from "node:fs";

export const readFileAction = async (file: string) => {
    try {
        const data = fs.readFileSync(file, 'utf-8');
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}