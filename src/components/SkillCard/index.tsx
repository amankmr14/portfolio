import { FaGitAlt, FaNode, FaReact } from 'react-icons/fa'
import { IoLogoSass } from 'react-icons/io5' 
import { RiNextjsFill } from 'react-icons/ri'
import { SiExpress, SiJavascript, SiMongodb, SiTypescript } from 'react-icons/si'

type Props = {
    skill: string
}

const SkillCard = ({ skill }: Props) => {

    const getIcon = (skill: string) => {
        switch(skill.toLowerCase()) {
            case "javascript":
                return <SiJavascript size={100} />
            case "typescript":
                return <SiTypescript size={100} />
            case "react":
                return <FaReact size={100} />
            case "next.js":
                return <RiNextjsFill size={100} />
            case "sass/scss":
                return <IoLogoSass size={100} />
            case "git":
                return <FaGitAlt size={100} />
            case "node.js":
                return <FaNode size={100} />
            case "express.js":
                return <SiExpress size={100} />
            case "mongodb":
                return <SiMongodb size={100} />
            default: 
                return null; 
        }
    }
  return (
    <div className="flex flex-col items-center justify-between p-4 border-2 hover:bg-black hover:text-white border-black rounded-sm cursor-pointer w-32 md:w-52 md:h-52 transition-colors duration-200">
        {getIcon(skill) ? getIcon(skill) : <img src={'#'} alt={`${skill} icon`} className="w-12 h-12 mb-4" />}
        <span className="text-lg font-medium">{skill}</span>
    </div>
  )
}

export default SkillCard