import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import mplTokenMetadata from "@metaplex-foundation/mpl-token-metadata";
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { clusterApiUrl } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";

import * as anchor from "@project-serum/anchor";
import { ShdwDrive } from "@shadow-drive/sdk";

/**
 * Creates a new Metaplex Standard NFT (Non-Fungible Token).
 * @returns {Promise<string>} The signature of the transaction.
 */
export async function createStandardNFT(connection, wallet) {
  //hooks
  const [file, setFile] = useState(
    new File(["Max Mustermann"], "muster.txt", { type: "text/plain" })
  );

  //Initialize components.
  const connection= connection;
  const wallet = wallet;
  //shadow drive
  const drive = await new ShdwDrive(connection, wallet).init();
  //create a shadow account
  const newAcct = await drive.createStorageAccount(
    "myDemoBucket",
    "10MB",
    "v2"
  );
  console.log("Shadow account created.");
  console.log("Shdw Bucket: " + newAcct.shdw_bucket);
  //retrieve pubkey of created account
  console.log("Fetching storage account...");
  const accounts = await drive.getStorageAccounts();
  const acc = accounts[0].publicKey;
  console.log("Retrieved storage account " + acc);
  //upload file
  console.log("Uploading file...");
  const upload = await drive.uploadFile(acc, file);
  console.log(
    "Uploaded file successfully here: " + upload.finalized_locations[0]
  );
  //configure umi
  //validate inputs
  //upload metadata
  //create account
  //mint account
  //return transaction & mint address
}

/**
 * Creates a new compressed NFT (Non-Fungible Token).
 * @returns {Promise<string>} The signature of the transaction.
 */
export async function createCompressedNFT() {
  //Connect to the cluster
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const wallet = useWallet();

  //create an umi instance
  const umi = createUmi({
    connection: connection,
    wallet: wallet,
  });

  //configure umi

  //upload image

  //validate inputs

  //upload metadata

  //create account

  //mint account

  //return transaction & mint address
}

/**
 * Creates a new programmable NFT (Non-Fungible Token).
 * @returns {Promise<string>} The signature of the transaction.
 */
export async function createProgrammableNFT() {
  //Connect to the cluster.
  //create an umi instance
  //configure umi
  //upload image
  //validate inputs
  //upload metadata
  //create account
  //mint account
  //return transaction & mint address
}
