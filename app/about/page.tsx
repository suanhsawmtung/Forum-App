import Card from "@/components/card/Card";
import CardBody from "@/components/card/CardBody";
import CardTitle from "@/components/card/CardTitle";
import { montserrat } from "@/theme/fonts";

const About = () => {
    return (
        <Card>
            <div className={`flex flex-col gap-6 pb-12 ${montserrat.className}`}>
                <CardTitle
                    title="About This Website"
                    icon={<span className="text-secondary">#</span>}
                />
                <CardBody 
                    body="Welcome to our forum, a vibrant community where ideas come to life and connections are made. Our platform is designed to bring people together for engaging discussions on a wide range of topics. Whether you’re passionate about current events, hobbies, or niche interests, you'll find a space to share your thoughts and learn from others."
                />
                <CardBody 
                    body="In addition to lively discussions, we offer a unique feature: personality and interest quizzes. These quizzes provide an entertaining way for users to discover more about themselves and their preferences. Participate in our quizzes to gain insights, challenge your views, and connect with like-minded individuals."
                />
                <CardBody 
                    body="    Join us today and be part of a community where conversations flourish, and self-discovery is just a quiz away. Your voice matters here, and we look forward to hearing what you have to say!"
                />
            </div>
        </Card>
    );
}

export default About;