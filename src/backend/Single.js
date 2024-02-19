import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import mplTokenMetadata from "@metaplex-foundation/mpl-token-metadata";
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { clusterApiUrl } from "@solana/web3.js";

/**
 * Creates a new NFT (Non-Fungible Token).
 * @returns {Promise<string>} The signature of the transaction.
 */
export async function createStandardNFT() {
  // Connect to the cluster.
  const connection = new Connection(clusterApiUrl("devnet"));
  const umi = createUmi(connection);
}
