import AboutCreatorCard from "../components/aboutpagecards/AboutCreatorCard";
import AuthorMessageCard from "../components/aboutpagecards/AuthorMessageCard";
import AboutPurposeCard from "../components/aboutpagecards/AboutPurposeCard";
import AboutInfoCard from "../components/aboutpagecards/AboutInfoCard";

function About() {
    return (
        <div>
            <h1 className="text-4xl font-bold font-serif text-center p-8">About Finish the Formula</h1>
            <AboutCreatorCard
                myImg="./images/creator.jpg"
                myTitle="About the Creator:"
                myName="Audrey Mundro"
                myBio="is eighteen years old. She was born in San Francisco, California, graduated from Oakland Technical High School and is going to study Chemistry at California Polytechnic State University - San Luis Obispo next year. She is passionate about STEM, and is always eager to learn more about any subject and solve problems. She started watching Formula 1 in 2018 with the release of Drive to Survive on Netflix and since then has researched the sport extensively. She is now working towards a career in engineering in Formula 1."
                myGithub={<a href="https://github.com/audreymundro"></a>}
            />
            <AuthorMessageCard
                authTitle="A Message from the Author:"
                mySubtitle="Welcome to my website!"
                addMore="Hi, I'm Audrey, the creator of this website. I am a young woman who is insistent on achieving her dream of working in Formula 1 and in the world of motorsports. Just to give you a little info about me, I am someone who loves hard problems and finding unconventional solutions. I enjoy all sports (with a particular interest in motorsports), reading, writing, baking, and traveling. I just always love to create, whether it be for work or for myself. I love learning and experiencing new things, it is what brings me the most joy in life. Thank you for visiting my website, enjoy!"
            />
            <AboutPurposeCard
                myTitle="Our Purpose:"
                myReason="This website was created to foster a space for women and girls in motorsports and STEM. There is a significant difference in representation and opportunities for women in these fields, and we aim to change that by providing resources, support, and a community for underrepresented aspiring individuals."
                myStory="This website began as a senior year school project, but since the beginning Audrey had hoped this would expand into something bigger. The website evolved and became a platform to share her interests and hopes with a wider audience."
            />
            <AboutInfoCard
                myTitle="Contact Information"
                myDescription="Feel free to message the creators on any of the following platforms:"
                myEmail="audrey.mundro@gmail.com"
                myLinkedIn="Audrey Mundro"
                myInstagram="@audreymundro"
            />
        </div>
    );
}
export default About;
