import cp from "child_process";
import path from "path";
import { getModuleInfo, getOutDir } from "./common";

// TODO dev, '@fe/mct5-icons'
const stories = ["@fe/components"];

stories.forEach((moduleName) => {
  const { pkgDir } = getModuleInfo(moduleName);
  const { outDir } = getOutDir(moduleName);
  const pkgConfig = path.join(pkgDir, ".storybook");
  const buildCommand = `npx build-storybook -c ${pkgConfig} -o ${outDir} --preview-url /components/iframe.html --force-build-preview`;
  cp.execSync(buildCommand, { stdio: "inherit", cwd: pkgDir });
});
