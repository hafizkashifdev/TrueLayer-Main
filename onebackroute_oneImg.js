const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  { name: "get data in batch 2", backRoute: "/ batch" },
  { name: "response 2.1", backRoute: "/ batch" },
  { name: "ok 200 2.1.1", backRoute: "/ batch" },
  { name: "response body 2.1.1.1", backRoute: "/ batch" },
  { name: "results 2.1.1.1.3", backRoute: "/ batch" },
  { name: "transactions 2.1.1.1.3.1.1", backRoute: "/ batch" },
  { name: "pending transactions 2.1.1.1.3.1.2", backRoute: "/ batch" },
  { name: "header 1.3.1.2", backRoute: "/ batch" },
  { name: "unauthorized 401 2.1.2", backRoute: "/ batch" },
  { name: "response body 2.1.2.1", backRoute: "/ batch" },
  { name: "header 2.1.2.2", backRoute: "/ batch" },
  { name: "access denied 403 2.1.3", backRoute: "/ batch" },
  { name: "response body 2.1.3.1", backRoute: "/ batch" },
  { name: "header 2.1.3.2", backRoute: "/ batch" },
  { name: "not found 404 2.1.4", backRoute: "/ batch" },
  { name: "response body 2.1.4.1", backRoute: "/ batch" },
  { name: "header 2.1.4.2", backRoute: "/ batch" },
  { name: "internal server error 500 2.1.5", backRoute: "/ batch" },
  { name: "response body 2.1.5.1", backRoute: "/ batch" },
  { name: "header 2.1.5.2", backRoute: "/ batch" },
  { name: "service unavailable 503 2.1.6", backRoute: "/ batch" },
  { name: "response body 2.1.6.1", backRoute: "/ batch" },
  { name: "header 2.1.6.2", backRoute: "/ batch" },
  { name: "gateway timeout 504 2.1.7", backRoute: "/ batch" },
  { name: "response body 2.1.7.1", backRoute: "/ batch" },
  { name: "header 2.1.7.2", backRoute: "/ batch" },
];

const toPascalCase = (str) =>
  str
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

const toKebabCase = (str) =>
  str
    .trim()
    .replace(/[&/()]+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    .replace(/^-+|-+$/g, "");

for (const page of pages) {
  const { name } = page;
  let { backRoute } = page;

  if (!name || typeof name !== "string" || !name.trim()) {
    console.log("[SKIP] Invalid or empty page name. Skipping entry.");
    continue;
  }

  const kebabBase = toKebabCase(name);
  const pascalBase = toPascalCase(name);

  // Determine directory name and image index
  let dir = path.join(baseDir, kebabBase);
  let finalKebab = kebabBase;
  let imageIndex = "";
  let dirSuffix = 0;

  while (fs.existsSync(dir) && dirSuffix < 100) {
    dirSuffix++;
    finalKebab = `${kebabBase}-section${dirSuffix}`;
    dir = path.join(baseDir, finalKebab);
    imageIndex = String(dirSuffix);
  }

  if (dirSuffix >= 100) {
    console.log(`[ERROR] Too many duplicates for '${name}'. Skipping.`);
    continue;
  }

  const imageName = `${pascalBase}Image${imageIndex}`;
  const svgFile = `${imageName}.svg`;
  const pascalComponent = `${pascalBase}Page${imageIndex}`;

  if (backRoute && typeof backRoute === "string") {
    backRoute = `/${toKebabCase(backRoute)}`;
  }

  // Create directory
  fs.mkdirSync(dir, { recursive: true });
  console.log(`✅ Created directory: ${dir}`);

  // Write page.tsx
  const pageContent = `import { ${imageName} } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ${pascalComponent} = () => {
  return (
    <CommonPage
      pageTitle={\`${name}\`}
      src={${imageName}}
      backRoute="${backRoute}"
    />
  );
};

export default ${pascalComponent};
`;

  fs.writeFileSync(path.join(dir, "page.tsx"), pageContent, "utf8");
  console.log(`✅ page.tsx created in: ${dir}`);

  // Write image export
  const imageExport = `export { default as ${imageName} } from "./${svgFile}";\n`;

  if (fs.existsSync(indexTsxPath)) {
    const content = fs.readFileSync(indexTsxPath, "utf8");
    if (!content.includes(imageExport.trim())) {
      fs.appendFileSync(indexTsxPath, imageExport);
      console.log(`✅ Export added to index.tsx: ${imageName}`);
    } else {
      console.log(`⚠️ Export for ${imageName} already exists. Skipped.`);
    }
  } else {
    fs.writeFileSync(indexTsxPath, imageExport);
    console.log(`✅ index.tsx created and export written.`);
  }
}

console.log("\n🎉 Page generation complete.");
