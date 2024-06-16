import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import gojo from "../../assets/gojo.jpg";

type Props = {
    data: string
}

const About = ({ data }: Props) => {
    return (
        <section id="about" className="flex flex-col xl:px-56 md:flex-row items-center justify-between p-8 bg-white">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-light">
                    Hello I'm <span className="font-bold">Aman Kumar</span>.
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold my-4">
                    Frontend <span className="text-outline">Developer</span> <br />
                </h2>
                <h2 className="text-2xl md:text-4xl my-4">Based In <span className="font-bold">India</span>.</h2>
                <p className="text-gray-700 mt-4">
                    {data}
                </p>
                <div className="flex space-x-4 mt-8">
                    <a href="https://github.com/amankmr14" target="_blank">
                        <FaGithubSquare size={40} className="text-black hover:text-white hover:bg-black hover:rounded transition-colors duration-300"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aman28kumar/" target="_blank">
                        <FaLinkedin size={40} className="text-black hover:text-white hover:bg-black hover:rounded transition-colors duration-300"/>
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img src={gojo} alt="Illustration of a developer" className="w-80 h-80" />
            </div>
        </section>
    );
};

export default About;
