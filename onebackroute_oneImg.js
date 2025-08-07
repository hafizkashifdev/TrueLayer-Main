const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

// const pages = [
//   { name: "cross-sector-inspections", title:"Cross-Sector Inspections", backRoute: "/ Care Quality Commission" },
// ];

const pages = [
  // { name: "accounts-get-direct-debits-2", title: "Get direct debits" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-path-params", title: "Path Params" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-query-params", title: "Query Params" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
// { name: "accounts-get-direct-debits-responses", title: "Responses" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-200-ok", title: "200 (OK)" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-200-ok-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-200-ok-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-202-accepted", title: "Accepted" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-202-accepted-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-202-accepted-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"}, 
  // { name: "accounts-get-direct-debits-responses-401-unauthorized", title: "401(Unauthorized)" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-401-unauthorized-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-401-unauthorized-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-403-access-denied", title: "403(Access Denied)" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-403-access-denied-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-403(access-denied)-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-404-not-found", title: "404(Not Found)" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-404-not-found-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-404-not-found-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-429-rate-limit-exceeded", title: "429(Rate Limit Exceeded)" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-429-rate-limit-exceeded-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-429-rate-limit-exceeded-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-500-internal-server-error", title: "500(Internal Server Error)" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-500-internal-server-error-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-500-internal-server-error-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-501-not-implemented", title: "501(not-implemented)" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-501-not-implemented-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  // { name: "accounts-get-direct-debits-responses-501-not-implemented-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},

  { name: "accounts-get-direct-debits-responses-503-service-unavailable", title: "503(Service Unavailable)" , backRoute: "/accounts-get-direct-debits"},
  { name: "accounts-get-direct-debits-responses-503-service-unavailable-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  { name: "accounts-get-direct-debits-responses-503-service-unavailable-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
  { name: "accounts-get-direct-debits-responses-504-gateway-timeout", title: "504(Gateway Timeout)" , backRoute: "/accounts-get-direct-debits"},
  { name: "accounts-get-direct-debits-responses-504-gateway-timeout-response-body", title: "Response Body" , backRoute: "/accounts-get-direct-debits"},
  { name: "accounts-get-direct-debits-responses-504-gateway-timeout-headers", title: "Headers" , backRoute: "/accounts-get-direct-debits"},
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
