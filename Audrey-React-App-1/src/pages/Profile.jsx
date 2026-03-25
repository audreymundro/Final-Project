import MyProfileCard from "../components/profilepagecards/MyProfileCard";

function Profile() {
  return (
    <>
      <h1 className="text-4xl font-bold font-serif text-center py-4">Your Profile</h1>
      <MyProfileCard
        myName="Audrey Mundro"
        myBio="this is my description this is my description this is my description this is my description this is my description this is my description this is my description this is my description this is my description this is my description"
        myProfilePic="./images/f1academyphoto1.jpeg"
      />
    </>
  );
}

export default Profile;