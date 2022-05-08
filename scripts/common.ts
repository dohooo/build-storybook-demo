import path from "path";
import { InlineConfig } from "vite";

export const PREVIEW_BASE = "/";
// export const PREVIEW_BASE = '/cafeteria/cafeteria-components-next/';

export function getModuleInfo(moduleName: string) {
  const baseName = moduleName.split("/").pop();

  if (!baseName) {
    throw new Error("baseName is empty");
  }

  const pkgDir = path.join(__dirname, `../packages/${baseName}`);

  return { baseName, pkgDir };
}

export function getOutDir(moduleName: string) {
  const { baseName } = getModuleInfo(moduleName);

  return { outDir: path.join(__dirname, `../storybook-static/${baseName}`) };
}

function getBasePath(baseName: string) {
  return path.join(PREVIEW_BASE, baseName, "/");
}

export const definePreviewConfig = (
  moduleName: string,
  config: Record<string, any>
): InlineConfig => {
  const { baseName } = getModuleInfo(moduleName);
  const { outDir } = getOutDir(moduleName);
  console.log("base path:", getBasePath(baseName));
  return { ...config, base: getBasePath(baseName), build: { outDir } };
};

export const defineManagerConfig = (
  moduleName: string,
  config: Record<string, any>
): Record<string, any> => {
  const { baseName } = getModuleInfo(moduleName);

  config.output.publicPath = getBasePath(baseName);

  return config;
};
