import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import SectionTitle from "@/components/Common/SectionTitle";

const Blog = () => {
  const member=[]
  return (
    <>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="w-full px-3 lg:w-1/2">
              <SectionTitle
                title="Research Assistants"
                paragraph="Currently, we have several openings for Volunteer Research Assistants: ~ 5-10 hours/week; flexible working hours

                Responsibilities: 
                1.	Recruiting, screening, and scheduling study participants 
                2.	Work with amblyopic and healthy participants on psychophysical experiments
                3.	Participate as a research participant for data collection 
                
                An excellent opportunity to: 
                1.	Gain research experience in a leading amblyopia laboratory 
                2.	Learn about the latest developments in Vision Science
                3.	Present at research conferences
                4.	Work on your own research under supervision
                5.	Participate in the scholarly publication process
                6.	Prepare for further residency and research training
                
                Pre-optometry, optometry, computing, engineering and psychology students are encouraged to apply. 
                "
                mb="44px"
              />
              </div>
              <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Past Member
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {member.map((item, index) => (
                  <li style={{ fontSize: '10px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>

          
        </div>
      </section>
    </>
  );
};

export default Blog;
