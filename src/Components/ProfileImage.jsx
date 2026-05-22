import profilePhoto from "../assets/profile-original.png";

const ProfileImage = ({ alt, variant = "home" }) => {
  const imgClass =
    variant === "project" ? "project__profile-img" : "home__profile-img";
  const wrapClass =
    variant === "project" ? "project__profile-wrap" : "home__profile-wrap";

  return (
    <div className={wrapClass}>
      <img src={profilePhoto} alt={alt} className={imgClass} />
    </div>
  );
};

export default ProfileImage;
