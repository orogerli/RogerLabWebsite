import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const BlogDetailsPage = () => {
  const itemaspecial=[
    'Award Recipient. Walt and Lilly Disney Award for Amblyopia Research (Research to Prevent Blindness, New York; 2022) Nova Southeastern University Associate Professor Receives Special Grant for Eye Research (newswise.com) ',
  ]
  const itema=[
    'Award Recipient. Walt and Lilly Disney Award for Amblyopia Research (Research to Prevent Blindness, New York; 2022) Nova Southeastern University Associate Professor Receives Special Grant for Eye Research (newswise.com) ',
    'Grant Review Panel. Research Grants Council, Hong Kong (2016-)',
'Grant Review Panel. Natural Sciences and Engineering Research Council of Canada, Canada (2014) ',
'Grant Review Panel. Food and Health Bureau, Hong Kong (2013-)',
'Grant Review Panel. Research into Ageing, United Kingdom (2008)',
'Editor. Scientific Reports (2013-)',
'Associate Editor. Frontiers in Neuroscience (2022-)',
'Associate Editor. Frontiers in Psychology (2022-)',
'Review Editor. Frontiers in Neuroscience (2016-2022)',
'Review Editor. Frontiers in Psychology (2010-2022)',
'Editor. Annals of Eye Science (2020-2022)',
'Editor. International Journal of Ophthalmic Research (2014-2020)',
'Editor. World Journal of Ophthalmology (2011-2018)',
'Exceptional Reviewer. Journal of Vision (2012-2013a, 2012-2013b)',
'External Ph.D. examiner. University of New South Wales, School of Optometry and Vision Science, Australia (2011-2012)',
'Departmental Research Committee, NSUCO (2022-)',
'University Committee, Faculty Research Advisory Council, NSU (2022-)',
'Faculty Research Mentor, NSUCO (2023-)',
'17 Competitive Conference Travel Grants (AAOPT & ARVO; 2004-2022)'
  ]
  const itemstg =[
    'Betty Li (2022, AAO J&J Vision Student Travel Fellowship Grant)',
'Betty Li (2022, UCB Graduate Assembly Professional Development / Graduate Student Parent Travel Award, US$300) ',
'Michelle Antonucci (2019, AAO J & J Vision Student Travel Fellowship Grant)',
'Betty Li (2019, AAO N. Rex Ghormley Student Travel Fellowship Grant)',
'John Bui (2019, ARVO National Eye Institute Travel Grant)',
'Michelle Antonucci (2018, AAO J & J Vision Student Travel Fellowship Grant)',
'Kayee So (2014, ARVO Foundation/ Tyson Research Initiative/ PAOF/ RRF Travel Grant)',
'Thomas Wu (2014, ARVO National Eye Institute Travel Grant)',
'Ashley Craven (2013, AAO VISTAKON® Student Travel Fellowship)',
'Truyet Tran (2012, AAO VISTAKON® Student Travel Fellowship)',
'Ashley Craven (2012, AAO Board Travel Fellowship)',
'Charlie Ngo (2010, AAO VISTAKON® Student Travel Fellowship)',
'Charlie Ngo (2009, AAO VISTAKON® Student Travel Fellowship)',
'Charlie Ngo (2008, AAO VISTAKON® Student Travel Fellowship)',
'Karen Young (2005, AAO Student Travel Grant)',
'Karen Young (2005, ARVO Travel Grant)',
'Karen Young (2004, ARVO Travel Grant)'
  ]
  const itemsrf = ['Diana Chau. Theodore Cohn Memorial Scholarship (2017, UCBSO)',
  'Michelle Antonucci. SURF Rose Hills Fellowship (2015, UCBSO)',
  'Calvin Nguyen. Theodore Cohn Memorial Scholarship (2012, UCBSO)'
  ]
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Awards and Honor
                  </h3>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {itema.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>
                  

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Conference Travel Grants
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {itemstg.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Research Fellowships
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {itemsrf.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
