import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0xa3D0bd8C71349653bC7EeD069318977614141D25"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Symbol oF DAO",
        description: "This NFT will give you access to our finest DAO!",
        image: readFileSync("scripts/assets/daoNFT.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
