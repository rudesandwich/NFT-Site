import { TextBtn } from "../TextBtn";

function Community() {
  return (
    <div className="communitySection" data-aos= "fade-up">
      <div className="sectionInfo">
        <p className="title">Community</p>
        <p className="details">Join our Community</p>
      </div>
      <div className="joinInfo">
        <p>
          Join us on the cutting edge of digital ownership and experience the
          future of digital assets with NFTs.
        </p>
        <TextBtn text="Join us" />
      </div>
    </div>
  );
}

export default Community;
