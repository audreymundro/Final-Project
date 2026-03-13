import AboutCreatorCard from "../components/AboutCreatorCard";
import AboutPurposeCard from "../components/AboutPurposeCard";
import AboutInfoCard from "../components/AboutInfoCard";
import Footer from "../components/Footer";

function About() {
    return (
        <div>
            <h1 className="text-4xl font-bold font-serif text-center py-4">About Title</h1>
            <AboutCreatorCard
                myTitle="About the Creator:"
                myName="Audrey Mundro"
                mySubtitle="Welcome to my website!"
                myBio="Hi! I am 18 years old. I like sports, reading, and traveling. I am passionate about STEM, Formula 1, and soccer. I would like to work in F1 or motorsports later in my life."
            />
            <AboutPurposeCard
                myTitle="Our Purpose:"
                myReason="When I started this website, I wanted to create a space where I could help young girls find role models and opportunities in motorsports."
                myStory="I started this website as a senior in high school for a school project, but I wanted to expand it to reach more people. The website evolved and became a platform to share my interests and projects with a wider audience."
            />
            <AboutInfoCard
                myTitle="Contact Information"
                myDescription="Feel free to message the creators on any of the following platforms."
                myEmail="audrey.mundro@gmail.com"
            />
            <Footer />

        </div>
    );
}
export default About;
