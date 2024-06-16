import { TExp } from "../../App"

type Props = {
    data: TExp
}

const Experience = ({ data }: Props) => {
  return (
    <section id="experience" className="bg-black py-10 px-52 sm:px-16 xl:px-80">
        <h2 className="text-2xl md:text-4xl font-bold my-4 text-center text-white">My Experience</h2>
        {data?.map((obj) => (
            <div key={obj.id} className="border border-gray-600 p-2 hover:bg-gray-600 my-5 rounded text-white">
                <div className="flex justify-between items-center px-2">
                    <div className="flex items-center">
                        <img src={obj.company_logo} className="h-12"/>
                        <h4 className="text-2xl">{obj.job_profile} at {obj.company_name}</h4>
                    </div>
                    <span className="font-extralight text-sm">{obj.duration}</span>
                </div>
                <div className="px-4 my-4">
                    As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.
                </div>
            </div>
        ))}
    </section>
  )
}

export default Experience