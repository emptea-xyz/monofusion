import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="name">
          Mono<span>Fusion</span>
        </div>
        <Navbar />
        <div className="mode">create</div>
        <div className="panel">
          <div className="editor">
            <div className="switch">
              <div className="">NFT</div>
              <div className="">cNFT</div>
              <div className="">pNFT</div>
            </div>
            <div className="form">
              <input type="text" name="Name" placeholder="Name" />
              <textarea
                type="text"
                name="description"
                placeholder="Description"
              />
              <div className="attributes-button">add</div>
            </div>
          </div>
          <div className="preview">
            <div className="content">
              <div className="image"></div>
              <div className="details"></div>
            </div>
            <div className="submit">create</div>
          </div>
        </div>
      </div>
    </>
  );
}
