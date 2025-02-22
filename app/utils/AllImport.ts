// utils/AllImport.ts
import fs from 'fs';
import React from "react";

type ModuleType = Record<string, unknown> | React.ComponentType;

const importAll = (
    path: string,
    arequire: (path: string) => ModuleType = require
): Record<string, ModuleType> => {
    const files = fs.readdirSync(path);
    const res: Record<string, ModuleType> = {};

    for (const file of files) {
        const [fileName] = file.split('.');
        const fullPath = `${path}/${file}`;

        if (fs.statSync(fullPath).isDirectory()) {
            res[fileName] = arequire(fullPath);
        }
    }

    return res;
};

export default importAll;