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

/**
 * Creates a new Metaplex Standard NFT (Non-Fungible Token).
 * @returns {Promise<string>} The signature of the transaction.
 */
export async function createStandardNFT() {
  //Connect to the cluster.
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  I;

  //create an umi instance

  //configure umi

  //upload image

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
