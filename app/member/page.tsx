
import SectionTitle from "@/components/Common/SectionTitle";

const Blog = () => {
  const principle=[
    'Roger W. Li OD, PhD  (Associate Professor, Department of Optometry Research)',
  ]

  const labmanager=[
    'Sandy W. Chat OD, MPhil',
  ]
  const assitantlabmanager=[
    'Anamaria Rey (NSU, Pre-Opt)',
'Lara Cereminati (NSU, Pre-Med)',

  ]

  const projectmanager=[
    'Jacob Ruby (NSU, Pre-Opt)',
'Srujan Miryala (NSU, Pre-Med)',

  ]

  const researchassit=[
    'Murielle Cayemitte (NSUCO)',
'Nada Bleibel (NSU, pre-Opt)',
'Riya Vadalia (NSU, Pre-Med)',
'Taylor Zinkler (UF, Pre-DPsy)',
'Triet Do (NSU, Comp)',

  ]
  const shadow=[
    'Charlene Y. Li (Cooper City High, Pre-Med)',
  ]
  const member=[]
  return (
    <>

      <section className="pt-[120px] pb-[120px]">
        <div className="container">

        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Principel Investigator
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {principle.map((item, index) => (
          <li  className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Lab Manager
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {labmanager.map((item, index) => (
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>


          <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Assistant Lab Manager
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {assitantlabmanager.map((item, index) => (
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Project Manager
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {assitantlabmanager.map((item, index) => (
          <li  className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Research Assistant
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {researchassit.map((item, index) => (
          <li  className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Shadow Student
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {shadow.map((item, index) => (
          <li  className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>


        <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
           Past Member
        </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
          {member.map((item, index) => (
          <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
          ))}
          </ul>

          
        </div>
      </section>
    </>
  );
};

export default Blog;
