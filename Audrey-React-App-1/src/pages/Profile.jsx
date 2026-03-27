import MyProfileCard from "../components/profilepagecards/MyProfileCard";
import ProfileMoreCard from "../components/profilepagecards/ProfileMoreCard";

function Profile() {
  return (
    <>
      <h1 className="text-4xl font-bold font-serif text-center py-4">Profile</h1>
      <MyProfileCard
        myName="Audrey Mundro"
        myAge="18"
        myBio="I am a senior in high school who is going to college next year. I am passionate about chemistry, coding, and vehicle dynamics engineering. I want to work in Formula 1 after I graduate college."
        myProfilePic="./images/f1academyphoto1.jpeg"
      />
      <ProfileMoreCard
        myEducation="High School Diploma"
        myExperience="3 years of coding experience, including projects in React."
      />
    </>
  );
}

export default Profile;