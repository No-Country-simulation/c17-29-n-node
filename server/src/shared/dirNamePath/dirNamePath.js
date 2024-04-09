import { dirname } from "path";
import { fileURLToPath } from "url";

export const dirNamePath = dirname(fileURLToPath(import.meta.url)).split("shared")[0];
