const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

// const pages = [
//   { name: "cross-sector-inspections", title:"Cross-Sector Inspections", backRoute: "/ Care Quality Commission" },
// ];

// const pages = [
//   { name: "accounts-get-direct-debits-responses-503-service-unavailable", title: "503(Service Unavailable)" , backRoute: "/accounts-get-direct-debits"},
// ];

// pages.ts
 const pages = [
  // { name: "card-1-get-cards", title: "Get cards", backRoute: "/cards-get-cards" },
  // { name: "card-1-1-query-params", title: "Query Params", backRoute: "/cards-get-cards" },
  // { name: "card-1-2-headers", title: "Headers", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-response", title: "Response", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-1-200-ok", title: "200(OK)", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-1-1-response-body", title: "Response Body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-1-1-1-results", title: "Results", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-1-1-1-status", title: "Status", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-1-2-header", title: "Header", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-2--202-accepted", title: "202 Accepted", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-2-1-response-body", title: "Response Body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-2-2-header", title: "Header", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-3-401-unauthorized", title: "401 unauthorized", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-3-1-response-body", title: "Response Body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-3-2-header", title: "Header", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-4-403-access-denied", title: "Access Denied", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-4-1-response-body", title: "Response Body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-4-2-header", title: "Header", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-5-404-not-found", title: "404 not found", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-5-1-response-body", title: "Response Body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-5-2-header", title: "Header", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-6-429-rate-limit-exceeded", title: "429 Rate Limit Exceeded", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-6-1-response-body", title: "Response Body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-6-2-header", title: "Header", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-7-500-internal-server-error", title: "500 Internal server error", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-7-1-response-body", title: "Response body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-7-2-header", title: "Header", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-8-501-not-implemented", title: "501 not implemented", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-8-1-response-body", title: "Response body", backRoute: "/cards-get-cards" },
  // { name: "card-1-3-8-2-header", title: "Header", backRoute: "/cards-get-cards" },

  
  { name: "card-1-3-9-503-service-unavailable", title: "503 service unavailable", backRoute: "/cards-get-cards" },
  { name: "card-1-3-9-1-response-body", title: "Response body", backRoute: "/cards-get-cards" },
  { name: "card-1-3-9-2-header", title: "Header", backRoute: "/cards-get-cards" },
  { name: "card-1-3-10-504-gateway-timeout", title: "504 gateway timeout", backRoute: "/cards-get-cards" },
  { name: "card-1-3-10-1-response-body", title: "Response body", backRoute: "/cards-get-cards" },
  { name: "card-1-3-10-2-header", title: "Header", backRoute: "/cards-get-cards" },
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
