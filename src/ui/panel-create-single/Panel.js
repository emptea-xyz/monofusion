import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
//
import { Connection } from "@solana/web3.js";
//
import { useWallet } from "@solana/wallet-adapter-react";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
//
import { ShdwDrive } from "@shadow-drive/sdk";
import { WebIrys } from "@irys/sdk";
//
import { createGenericFile } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys";

import "./panel.css";

/**
 * The create-single panel. Used to create a single NFT.
 * @param {Function} setModal - Function, which changes the ID of the Modal.
 */
export default function Panel({ rpc, setRpc }) {
  const wallet = useWallet();
  //sets the type of NFT (NFT, cNFT, pNFT).
  const [type, setType] = useState(0);
  //sets the title of NFT.
  const [title, setTitle] = useState("-");
  //sets the description of NFT.
  const [description, setDescription] = useState("-");
  //sets the image-url of NFT.
  const [image, setImage] = useState(new File([""], "filename"));
  //sets the title of NFT.
  const [attributes, setAttributes] = useState([]);

  const [modal, setModal] = useState(0);
  //hooks to store the key and value of the attributes
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const [attributesKey, setAttributesKey] = useState("");

  /**
   * sourced from: https://docs.irys.xyz/developer-docs/irys-sdk/irys-in-the-browser
   */
  const getIrys = () => {
    const webIrys = new WebIrys({
      url: "https://devnet.irys.xyz",
      token: "solana",
      wallet,
    });
    return webIrys;
  };

  // a function to toggle the modal state
  const resetModal = () => {
    setModal(0);
  };

  // a function, which takes a file-input and checks if this file is an png and if this image is in square format.
  const checkImage = (input) => {
    if (input != undefined) {
      // Check if input is defined
      if (input.type == "image/png") {
        // Check if input type is PNG
        var reader = new FileReader();
        reader.onload = function (e) {
          var img = new Image();
          img.src = e.target.result;
          img.onload = function () {
            if (img.width == img.height) {
              // Check if image is square
              setImage(input); // Set the image if it meets the criteria
              console.log("match!");
              return true; // Return the image if it meets the criteria
            } else {
              console.log("not square");
              return false; // Return undefined if image is not square
            }
          };
        };
        reader.readAsDataURL(input); // Read the image file
      } else {
        console.log("not a png");
        return false; // Return undefined if input type is not PNG
      }
    } else {
      console.log("no input");
      return false; // Return undefined if input is not defined
    }
  };

  //a function called, which pops an item in the array of attributes at a given index and sets the new array of attributes
  const removeAttribute = (index) => {
    const oldArray = attributes;
    oldArray.splice(index, 1);
    console.log(oldArray);
  };

  /**
   * Creates a new Metaplex Standard NFT (Non-Fungible Token).
   * @returns {Promise<string>} The signature of the transaction.
   * sourced from: https://github.com/256hax/solana-anchor-react-minimal-example/blob/f01c520c7586ef3d5d71f577e55f1e9cc20278ae/scripts/metaplex/umi/src/irysUploader.ts#L44
   */
  const createNFT = async () => {
    if (wallet.connected) {
      try {
        const umi = createUmi(rpc);
        umi.use(irysUploader());
        umi.use(walletAdapterIdentity(wallet));

        const fileBuffer = image.arrayBuffer();
        const file = createGenericFile(fileBuffer, "image.jpg", {
          contentType: "image/png",
        });

        const uploadPrice = await umi.uploader.getUploadPrice([file]);
        const [fileUri] = await umi.uploader.upload([file]);
        console.log(imageUri);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Wallet not connected.");
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="panel create"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/**Every operation is done in here.*/}
          <motion.div className="editor">
            <motion.div className="switch font-text-small">
              <motion.div
                onClick={() => {
                  setType(0);
                }}
                className={type == 0 ? "active" : "inactive"}
                transition={{ duration: 0.1 }}
              >
                NFT
              </motion.div>
              <motion.div
                onClick={() => {
                  setType(1);
                }}
                className={type == 1 ? "active" : "inactive"}
                transition={{ duration: 0.1 }}
              >
                cNFT
              </motion.div>
              <motion.div
                onClick={() => {
                  setType(2);
                }}
                className={type == 2 ? "active" : "inactive"}
                transition={{ duration: 0.1 }}
              >
                pNFT
              </motion.div>
            </motion.div>
            <motion.div className="form">
              <input
                type="text"
                name="title"
                placeholder="Name"
                className="font-text-small"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                className="font-text-small"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <motion.div
                className="attributes-button font-text-bold"
                onClick={() => {
                  setModal(1);
                }}
              >
                add attributes
              </motion.div>
            </motion.div>
          </motion.div>
          {/**Shows a preview of the NFT */}
          <motion.div className="preview">
            <motion.div className="content">
              <motion.div
                className="image"
                onClick={() => {
                  document.getElementById("image-input").click();
                }}
              >
                <div className="placeholder font-text-small">
                  click here to import an image
                </div>
                <input
                  type="file"
                  name="cover"
                  id="image-input"
                  accept="image/png"
                  onChange={(e) => {
                    checkImage(e.target.files[0]);
                    console.log(e.target.files[0].name);
                  }}
                />
              </motion.div>
              <motion.div
                className="submit font-text-bold"
                onClick={() => {
                  createNFT();
                }}
              >
                create
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {modal != 0 && (
          <motion.div
            className="backdrop"
            id="backdrop"
            onClick={resetModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="attributes"
              onClick={(e) => {
                e.stopPropagation();
              }}
              key={attributesKey}
            >
              {attributes.map((attribute, index) => {
                return (
                  <motion.div
                    className="attribute"
                    key={index}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 2 }}
                    transition={{ delay: 0.1, duration: 0.1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("clicked.");
                      removeAttribute(index);
                      setAttributesKey(attributesKey + 1);
                    }}
                  >
                    <div className="key font-text-bold">{attribute.key}</div>

                    <div className="line"></div>
                    <div className="value font-text-light">
                      {attribute.value}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            {/*Modal component. Frames the modal content.*/}
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="create-attributes font-text">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="input">
                    <input
                      type="text"
                      className="key font-text"
                      placeholder="key"
                      required=""
                      onChange={(e) => {
                        setKey(e.target.value);
                      }}
                    />
                    <input
                      type="text"
                      className="value font-text"
                      placeholder="value"
                      required
                      onChange={(e) => {
                        setValue(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    className="submit font-text-bold"
                    type="submit"
                    disabled={!key || !value}
                    onClick={() => {
                      setAttributes([
                        ...attributes,
                        { key: key, value: value },
                      ]);
                    }}
                  >
                    {!key || !value ? "fill in the fields" : "add"}
                  </button>
                </form>
              </div>
            </motion.div>
            {/* Button with x symbol */}
            <button onClick={resetModal} className="close-button">
              <FontAwesomeIcon icon={faX} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
