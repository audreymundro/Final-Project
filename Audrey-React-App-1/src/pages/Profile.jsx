import MyProfileCard from "../components/profilepagecards/MyProfileCard";
import ProfileMoreCard from "../components/profilepagecards/ProfileMoreCard";
import ProfileSuggestionCard from "../components/profilepagecards/ProfileSuggestionCard";

function Profile() {
  return (
    <>
      <h1 className="text-4xl font-bold font-serif text-center p-8">Profile</h1>
      <MyProfileCard
        myName="Audrey Mundro"
        myAge="18"
        myBio="I am a senior in high school who is going to college next year. I am passionate about chemistry, coding, and engineering. I want to work in Formula 1 after college."
        myProfilePic="./images/oscarpiastri2.png"
      />
      <ProfileMoreCard
        myEducation="High School Diploma"
        myExperience="3 years of coding experience, including projects in React."
        mySkills="JavaScript, React, CSS"
      />
      <ProfileSuggestionCard
        otherProfilePic="./images/lauramueller.webp"
        otherName="Laura Müeller"
        otherAge="25"
        otherBio="Race Engineer at Haas TGR F1 Team"
      />
    </>
  );
}

export default Profile;