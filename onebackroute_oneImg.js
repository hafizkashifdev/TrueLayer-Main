const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  { name: "AGAB 1 ", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Path Params", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Query Params", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 200 (OK)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 200 (OK) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 200 (OK)  Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 202(Accepted)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 202(Accepted) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 202(Accepted) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 401(Unauthorized)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 401(Unauthorized) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 401(Unauthorized) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 403(Access Denied)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 403(Access Denied) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 403(Access Denied) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 404(Not Found)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 404(Not Found) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 404(Not Found) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 429(Rate Limit Exceeded)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 429(Rate Limit Exceeded) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 429(Rate Limit Exceeded) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 500(Internal Server Error)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 500(Internal Server Error) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 500(Internal Server Error) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 501(Not Implemented)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 501(Not Implemented) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 501(Not Implemented) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 503(Service Unavailable)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 503(Service Unavailable) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 503(Service Unavailable) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 504(Gateway Timeout)", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 504(Gateway Timeout) Response Body", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 504(Gateway Timeout) Headers", backRoute: "/Accounts Get account balance " },
  { name: "AGAB Responses 504(Gateway Timeout) Headers", backRoute: "/Accounts Get account balance " },
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
