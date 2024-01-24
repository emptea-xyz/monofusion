"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./panel.css";

export default function Panel({ setPanel }) {
  const [type, setType] = useState(0);
  const [title, setTitle] = useState("-");
  const [description, setDescription] = useState("-");
  const [attributes, setAttributes] = useState([]);

  return (
    <>
      <motion.div className="panel create">
        <motion.div className="editor">
          <motion.div className="switch">
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <motion.div className="attributes"></motion.div>
            <motion.div
              className="attributes-button"
              onClick={() => {
                setPanel(4);
              }}
            >
              add attributes
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="preview">
          <motion.div className="details">
            <div className="item name">
              <div className="key">
                <div>Name</div>
              </div>
              <div className="value">
                <div>{title}</div>
              </div>
            </div>
            <div className="item description">
              <div className="key">
                <div>Description</div>
              </div>
              <div className="value">
                <div>{description}</div>
              </div>
            </div>
            <div className="item attributes">
              <div className="key">
                <div>Attributes</div>
              </div>
              {attributes.length != 0 && (
                <div className="value">
                  {attributes.map((value) => {
                    return <div>{value.key + ": " + value.value}</div>;
                  })}
                </div>
              )}
              {attributes.length == 0 && <div className="value">-</div>}
            </div>
          </motion.div>
          <motion.div className="content">
            <motion.div className="image">
              <div className="placeholder">click here to import an image</div>
            </motion.div>
            <motion.div className="submit">create</motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
