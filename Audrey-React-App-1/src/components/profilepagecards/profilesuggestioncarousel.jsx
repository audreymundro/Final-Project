import ProfileExtraCard from "./extraprofilescode";

function ProfileSuggestionCarousel({suggestions}) {
  return (
    <div className="carousel rounded-box">
  <div className="carousel-item p-4">
    <ProfileExtraCard
      otherProfilePic="./images/lauramueller.webp"
      otherName="Laura Mueller"
      otherAge="25"
      otherBio="Race Engineer at TGR Haas F1 Team"
    />
  </div>
  <div className="carousel-item p-4">
    <ProfileExtraCard
      otherProfilePic="./images/hannahschmitz.png"
      otherName="Hannah Schmitz"
      otherAge="40"
      otherBio="Strategy Engineer at Red Bull Racing"
    />
  </div>
  <div className="carousel-item p-4">
    <ProfileExtraCard
      otherProfilePic="./images/dorianepin.png"
      otherName="Doriane Pin"
      otherAge="22"
      otherBio="Development Driver for Mercedes AMG Petronas F1 Team"
    />
  </div>
  <div className="carousel-item p-4">
    <ProfileExtraCard
      otherProfilePic="./images/oscarpiastri2.png"
      otherName="Oscar Piastri"
      otherAge="22"
      otherBio="F1 Driver for McLaren"
    />
  </div>
  <div className="carousel-item p-4">
    <ProfileExtraCard
      otherProfilePic="./images/hannahschmitz.png"
      otherName="Hannah Schmitz"
      otherAge="40"
      otherBio="Strategy Engineer at Red Bull Racing"
    />
  </div>
  <div className="carousel-item p-4">
    <ProfileExtraCard
      otherProfilePic="./images/lauramueller.webp"
      otherName="Laura Mueller"
      otherAge="25"
      otherBio="Race Engineer at TGR Haas F1 Team"
    />
  </div>
  <div className="carousel-item p-4">
    <ProfileExtraCard
      otherProfilePic="./images/dorianepin.png"
      otherName="Doriane Pin"
      otherAge="22"
      otherBio="Development Driver for Mercedes AMG Petronas F1 Team"
    />
  </div>
  </div>
  );
}

export default ProfileSuggestionCarousel;
