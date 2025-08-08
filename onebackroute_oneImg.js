const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "src", "app", "(pages)");
const assetsDir = path.join(__dirname, "src", "assets");
const indexTsxPath = path.join(assetsDir, "index.tsx");

const pages = [
  { name: "transactions Get transactions-1", backRoute: "/get-transactions" },
  { name: "transactions   Responses-2 "  , backRoute: "/get-transactions" },
  { name: "transactions   200 _ Transaction _ Response Body-3 "  , backRoute: "/get-transactions" },
  { name: "transactions  MERCHANT ACCOUNT PAYMENT-4  "  , backRoute: "/get-transactions" },
  { name: "transactions SETTLED PAYMENT SOURCE OBJECT-5  "  , backRoute: "/get-transactions" },
  { name: "transactions  EXTERNAL PAYMENT-6  "  , backRoute: "/get-transactions" },
  { name: "transactions  REMITTER OBJECT-7  "  , backRoute: "/get-transactions" },
  { name: "transactions  return_for object-8  "  , backRoute: "/get-transactions" },
  { name: "transactions PENDING PAYOUT-9  "  , backRoute: "/get-transactions" },
  { name: "transactions  External Account-10  "  , backRoute: "/get-transactions" },
  { name: "transactions   PAYMENT SOURCE-11 "  , backRoute: "/get-transactions" },
  { name: "transactions BUSINESS ACCOUNT-12   "  , backRoute: "/get-transactions" },
  { name: "transactions   EXECUTED PAYOUT-13 "  , backRoute: "/get-transactions" },
  { name: "transactions External Account-14  "  , backRoute: "/get-transactions" },
  { name: "transactions   PAYMENT SOURCE-15 "  , backRoute: "/get-transactions" },
  { name: "transactions  BUSINESS ACCOUNT -16 "  , backRoute: "/get-transactions" },
  { name: "transactions Refund-17   "  , backRoute: "/get-transactions" },
  { name: "transactions  PAYMENT SOURCE OBJECT-18  "  , backRoute: "/get-transactions" },
  { name: "transactions 401 _ Unauthenticated _ Response Body-19   "  , backRoute: "/get-transactions" },
  { name: "transactions  403 _ Forbidden _ Response Body-20  "  , backRoute: "/get-transactions" },
  { name: "transactions  404 _ Account Not Found _ Response Body-21  "  , backRoute: "/get-transactions" },
  { name: "transactions  500 _ Unknown Error _ Response Body-22  "  , backRoute: "/get-transactions" },
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
