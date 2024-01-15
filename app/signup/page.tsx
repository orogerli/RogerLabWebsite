import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const SignupPage = () => {
  
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                
                
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Amblyopia (“Lazy Eye”) Treatment Study
                  </h3>
                  <p className="mb-10 list-inside list-disc text-body-color">
                  Children and adults with amblyopia are invited to participate in a clinical research trial conducted at the Nova Southeastern University College of Optometry. This research is set out to develop and evaluate a new vision training approach for improving lazy eye
                  </p>
                  
                  <p className="mb-10 list-inside list-disc text-body-color">
                  In the study, participants will be asked to look at a series of patterns on a monitor screen and make simple perceptual judgments. If you or your child has amblyopia and would like to participate, please contact the Principal Investigator</p>
                </div>




                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                3D Vision Study
                  </h3>
                  <p className="mb-10 list-inside list-disc text-body-color">
                  Adults with normal vision are invited to participate in a 3D vision study conducted at the Nova Southeastern University College of Optometry.
                  </p>
                  
                  <p className="mb-10 list-inside list-disc text-body-color">
                  In the study, participants will be asked to look at a series of patterns on a monitor screen and make simple perceptual judgments. If you have 20/20 vision and would like to participate, please contact the Principal Investigator.</p>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
