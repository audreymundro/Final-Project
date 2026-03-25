import AboutCreatorCard from "../components/aboutpagecards/AboutCreatorCard";
import AboutPurposeCard from "../components/aboutpagecards/AboutPurposeCard";
import AboutInfoCard from "../components/aboutpagecards/AboutInfoCard";

function About() {
    return (
        <div>
            <h1 className="text-4xl font-bold font-serif text-center py-4">About Finish the Formula</h1>
            <AboutCreatorCard
                myTitle="About the Creator:"
                myName="Audrey Mundro"
                myBio="is 18 years old and is currently still a senior in high school. She is passionate about STEM, and is always eager to learn more about coding. She also has a particular interest in Formula 1 that begin in 2018 and she is now working towards a career in engineering in Formula 1."
                mySubtitle="Welcome to my website!"
                myGithub={<a href="https://github.com/audreymundro"></a>}
                addMore="Hi! I'm Audrey, the creator of this website. Just to give you a little info about me, I am someone who loves almost anything, all sports (though I have a slight obsession with F1), reading, writing, baking, traveling, I just always love to create, whether it be for work or for myself. I love learning and experiencing new things, it is what brings me the most joy in life. Thank you for visiting my website, enjoy!"
            />
            <AboutPurposeCard
                myTitle="Our Purpose:"
                myReason="This website was created to foster a space for women and girls in motorsports and STEM."
                myStory="I started this website as a senior in high school for a school project, but I wanted to expand it to reach more people. The website evolved and became a platform to share my interests and projects with a wider audience."
            />
            <AboutInfoCard
                myTitle="Contact Information"
                myDescription="Feel free to message the creators on any of the following platforms."
                myEmail="audrey.mundro@gmail.com"
            />
        </div>
    );
}
export default About;
