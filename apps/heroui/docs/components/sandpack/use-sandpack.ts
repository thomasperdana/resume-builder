import type {SandpackFiles, SandpackPredefinedTemplate} from "@codesandbox/sandpack-react";
import type {HighlightedLines} from "./types";

import {useMemo} from "react";
import {useTheme} from "next-themes";
import {useLocalStorage} from "usehooks-ts";
import {omit} from "lodash";

import {getHighlightedLines, getFileName} from "./utils";
import {
  stylesConfig,
  postcssConfig,
  tailwindConfig,
  npmrcConfig,
  getHtmlFile,
  rootFile,
  viteConfig,
} from "./entries";

export interface UseSandpackProps {
  files?: SandpackFiles;
  typescriptStrict?: boolean;
  template?: SandpackPredefinedTemplate;
  highlightedLines?: HighlightedLines;
}

const importReact = 'import React from "react";';

export const useSandpack = ({
  files = {},
  typescriptStrict = false,
  template = "vite-react",
  highlightedLines,
}: UseSandpackProps) => {
  // once the user select a template we store it in local storage
  const [currentTemplate, setCurrentTemplate] = useLocalStorage<SandpackPredefinedTemplate>(
    "currentTemplate",
    template,
  );
  const hasTypescript = Object.keys(files).some(
    (file) => file.includes(".ts") || file.includes(".tsx"),
  );

  const {theme} = useTheme();

  const decorators = getHighlightedLines(highlightedLines, currentTemplate);

  const sandpackTemplate = useMemo<SandpackPredefinedTemplate>(
    () => (currentTemplate === "vite-react-ts" && hasTypescript ? currentTemplate : "vite-react"),
    [currentTemplate, hasTypescript],
  );

  // map current template to its mime type
  const mimeType = useMemo(
    () => (sandpackTemplate === "vite-react-ts" ? ".tsx" : ".jsx"),
    [sandpackTemplate],
  );

  // get entry file by current template
  const entryFile = useMemo(
    () => (sandpackTemplate === "vite-react-ts" ? "index.tsx" : "index.jsx"),
    [sandpackTemplate],
  );

  // filter files by current template
  const filteredFiles = Object.keys(files).reduce((acc, key) => {
    if (key.includes("App") && !key.includes(mimeType)) {
      return acc;
    }
    if (typescriptStrict && currentTemplate === "vite-react-ts" && key.includes(".js")) {
      return acc;
    }
    if (currentTemplate === "vite-react" && key.includes(".ts")) {
      return acc;
    }
    // @ts-ignore
    acc[key] = files[key];

    return acc;
  }, {});

  let dependencies = {
    "framer-motion": "11.18.2",
    "@heroui/react": "latest",
  };

  // sort files by dependency
  const sortedFiles = Object.keys(filteredFiles)
    .sort((a: string, b: string) => {
      const aFile = files[a] as string;
      const bFile = files[b] as string;
      const aName = getFileName(a);
      const bName = getFileName(b);

      // if bName includes "App" should be first
      if (bName.includes("App")) {
        return 1;
      }

      if (aFile?.includes(bName)) {
        return -1;
      }
      if (bFile.includes(aName)) {
        return 1;
      }

      return 0;
    })
    .reduce((acc, key) => {
      let fileContent = files[key] as string;

      // Check if the file content includes 'React' import statements, if not, add it
      if (
        fileContent.includes("React.") &&
        !fileContent.includes("from 'react'") &&
        !fileContent.includes('from "react"')
      ) {
        fileContent = `${importReact}\n${fileContent}\n`;
      }

      // Check if file content includes any other dependencies, if yes, add it to dependencies
      const importRegex = /import .* from ["'](.*)["']/g;
      let match: RegExpExecArray | null;

      while ((match = importRegex.exec(fileContent)) !== null) {
        const dependencyName = match[1];

        if (!dependencies.hasOwnProperty(dependencyName) && !dependencyName.includes("./")) {
          // add the dependency to the dependencies object with version 'latest'
          // @ts-ignore
          dependencies[dependencyName] = "latest";
        }
      }

      return {
        ...acc,
        [key]: fileContent,
      };
    }, {});

  /**
   * Uncomment this logic when specific imports are needed
   */
  // const heroUIComponents = useMemo(
  //   () =>
  //     Object.values(getHeroUIComponents(sortedFiles) || {}).flatMap((e) =>
  //       e.split(",").map((name) => name.replace(/"/g, "")),
  //     ),
  //   [sortedFiles],
  // );

  // const hasComponents = !isEmpty(heroUIComponents);

  // const dependencies = useMemo(() => {
  //   let deps = {
  //     "framer-motion": "11.18.2",
  //   };

  //   if (hasComponents) {
  //     let deps = {
  //       "@heroui/theme": "canary",
  //       "@heroui/system": "canary",
  //     };

  //     heroUIComponents.forEach((component) => {
  //       deps = {
  //         ...deps,
  //         [`@heroui/${component}`]: "canary",
  //       };
  //     });

  //     return deps;
  //   }

  //   return {
  //     ...deps,
  //     "@heroui/react": "canary",
  //   };
  // }, [hasComponents, heroUIComponents, component]);

  // const tailwindConfigFile = useMemo(
  //   () => (hasComponents ? updateTailwindConfig(tailwindConfig, heroUIComponents) : tailwindConfig),
  //   [tailwindConfig, heroUIComponents],
  // );

  const customSetup = {
    dependencies,
    entry: entryFile,
    devDependencies: {
      postcss: "^8.4.21",
      tailwindcss: "4.1.11",
      "@tailwindcss/postcss": "4.1.11",
      "@tailwindcss/vite": "4.1.11",
      vite: "6.0.6",
    },
  };

  const packageJson = `{
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "react": "18.3.1",
      "react-dom": "18.3.1",
      ${Object.entries(
        omit(dependencies as any, [
          "react",
          "react-dom",
          "react-dom/client",
          "@vitejs/plugin-react",
          "vite",
          "postcss",
          "tailwindcss",
          "@tailwindcss/vite",
          "@tailwindcss/postcss",
        ]),
      )
        .map(([key, value]) => `"${key}": "${value}"`)
        .join(",\n      ")}
    },
    "devDependencies": {
      "@vitejs/plugin-react": "4.3.4",
      ${Object.entries(customSetup.devDependencies)
        .map(([key, value]) => `"${key}": "${value}"`)
        .join(",\n      ")}
    },
    "main": "/index.jsx",
    "packageManager": "pnpm@9.6.0"
  }`;

  return {
    customSetup,
    files: {
      ...sortedFiles,
      [entryFile]: {
        code: rootFile,
        hidden: true,
      },
      "index.html": {
        code: getHtmlFile(theme ?? "light", entryFile),
        hidden: true,
      },
      "tailwind.config.js": {
        code: tailwindConfig,
        hidden: true,
      },
      "postcss.config.cjs": {
        code: postcssConfig,
        hidden: true,
      },
      "styles.css": {
        code: stylesConfig,
        hidden: true,
      },
      ".npmrc": {
        code: npmrcConfig,
        hidden: true,
      },
      "vite.config.js": {
        code: viteConfig,
        hidden: true,
      },
      "package.json": {
        code: packageJson,
        hidden: true,
      },
    },
    hasTypescript,
    entryFile,
    sortedFiles,
    decorators,
    sandpackTemplate,
    setCurrentTemplate,
  };
};
