"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

const  BlogDetailsPage = () => {
  const item2029=['* Li BZ, Antonucci MM, Levi DM, Li RW. Towards developing a stereoscopic treatment for childhood amblyopia using 3D video games. American Academy of Optometry, San Diego, CA [Talk]',
  'Tao X, Antonucci MM, Li BZ, Levi DM, Li RW. Playing “3D” video games improves contrast sensitivity in adult amblyopia. American Academy of Optometry, San Diego, CA',
  'Antonucci MA, Leung JT, Li BZ, Kee CS, Levi DM, Li RW. (2022) Improving meridional acuity deficits in astigmatism-related amblyopia by grating acuity training. ARVO, Denver, CO',
  '* Li BZ, Ngo CV, Antonucci MA, Levi DM, Li RW. (2022) Stereoscopic 3D videogame play boosts stereoacuity, but not contrast sensitivity. ARVO, Denver, CO',
  'Chung STL, Li RW, Li BZ, Lei Q, Levi DM. (2022) Local analysis reveals lower light sensitivity and thicker retinal layers of the amblyopic eyes near the fovea. ARVO, Denver, CO',
  'Cheong AMY, Lam HY, Lyu AQ, Abel LA, Chan AY, Cheung YF, Lee PH, Li LSW, Li R, Li RW. (2021) Pursuit eye movement of Parkinson’s disease – pilot study. American Academy of Optometry, Boston, MA',
  'Chung STL, Li RW, Agaoglu MN, Tiruveedhula P, Roorda A. (2021) Binocular properties of fixational eye movements as assessed using a high-resolution binocular scanning laser ophthalmoscope. ARVO, Baltimore, MD',
  'Chung STL, Li RW, Tiruveedhula P, Agaoglu MN, Levi DM, Roorda A. (2020) Two eyes are better than one: the importance of binocular visual input in eye fixation in amblyopia. Vision Sciences Society, St. Pete Beach, Florida.']
  
  const items2019 =[
    'Antonucci MA, Leung JT, Li BZ, Kee CS, Bui JK, Feldmar B, Levi DM, Li RW. (2019) Improving meridional acuity deficits in astigmatism-related amblyopia by grating acuity training. American Academy of Optometry, Orlando, FL',
'Li BZ, Tran KD, Ngo CV, Antonucci MA, Bui JK, Chau DD, Levi DM, Li RW. (2019) Stereoscopic 3D videogame play boosts stereoacuity, but not contrast sensitivity. American Academy of Optometry, Orlando, FL',
'Levi DM, Li RW. (2019) Playing 3-dimensional (3D), but not 2D video games can improve stereoacuity in neurotypical observers. Vision Sciences Society, St. Pete Beach, Florida.',
'Leung TW, Antonucci MA, Li BZ, Wong C, Chan KH, Feldmar B, Tran KD, Kee CS, Li RW. (2019) Improving Grating Acuity in Adult Amblyopia by Perceptual Learning. ARVO, Vancouver, Canada.',
'Cheong AMY, Lam HY, Abel LA, Chan AY, Cheung YF, Lee PH, Li LSW, Li R, Li RW. (2018) Saccadic eye movement abnormalities in Parkinson’s disease. ARVO, Vancouver, Canada. [Talk]',
'Bui JK, Li BZ, Li BB, Fung EM, Antonucci MA, Tran KD, Patel SS, Chung ST, Levi DM, Li RW. (2018) Stereoscopic 3D video games boost depth perception. ARVO, Vancouver, Canada.',
'*Antonucci MA, Li BZ, Tran KD, Bui JK, Li BB, Patel SS, Chung ST, Levi DM, Li RW. (2018) Stereoscopic 3D video games boost depth perception. American Academy of Optometry, San Antonio, TX [Talk, Hot topics: Binocular Vision]',
'Tran KD, Chau DD, Li BZ, Antonucci MA, Bui JK, Ngo CV, Levi DM, Li RW. (2018) A new binocular approach for treatment of strabismic amblyopia using 3D video games. ARVO, Honolulu, HNI',
'Cheong AMY, Lam HY, Li RW, Leat SJ, Tsang WWN. (2018) Fast-paced videogame training improves balance under dynamic visual conditions in older adults. ARVO, Honolulu, HNI',
'DeLestrange E., Li RW, Leung, TW, Kee CS. (2018) Spatial attention increases paracentral visual acuity under defocused conditions. ARVO, Honolulu, HNI',
'Tran KD, Li BZ, Chau DD, Antonucci MA, Bui JK, Ngo CV, Levi DM, Li RW. (2017) A novel binocular technique for treatment of strabismic amblyopia using 3D video games. American Academy of Optometry, Chicago, IL [Talk]',
'Chung STL, Li RW, Silver MA, Levi DM. (2017) Combining the cholinesterase inhibitor donepezil with perceptual learning in adults with amblyopia. Vision Sciences Society. St. Pete Beach, Florida, USA [Talk]',
'Tran KD, Antonucci MA, Li BZ, Chau D, Bui JK, Nguyen HM, Yang YE, Ngo CV, Levi DM, Li RW. (2017) Towards establishing a new binocular technique for amblyopia treatment using “3D” video games. ARVO, Baltimore, MD, USA',
'Tran KD, Antonucci MA, Bui JK, Levi DM, Li RW. (2016) Towards developing a new binocular technique for amblyopia treatment using stereoscopic “3D” video games. American Academy of Optometry, Anaheim, CA. [Talk, Hot topics: Binocular Vision]',
'Tran KD, Li BZ, Antonucci MA, Ngo CV, Chat S, Kee, C, Levi DM, Li RW. (May 2016) Astigmatic blur alters the spatial frequency tuning characteristics of stereopsis. ARVO, Seattle, WA, USA.',
'Cheong AMY, Lam HY, Tsang WWN, Leat SJ, Li RW. (May 2016) Slow-pace videogames are more effective than fast-pace videogames in enhancing visual attention in older adults. ARVO, Seattle, WA, USA.',
'Tran KD, Bui, J, Yang E, Moghtaderi A, Ngo CV, Chat S, Kee, C, Levi DM, Li RW. (Oct 2015) Effect of induced astigmatic blur on the spatial frequency tuning of stereopsis. American Academy of Optometry, New Orleans, Louisiana ,USA',
'Cheong AMY, Lam HY, Siong KH, Ting PWK, Tsang WWN, Leat SJ, Li RW. (Oct 2015) Dynamic visual acuity in community dwelling older adults. American Academy of Optometry, New Orleans, Louisiana ,USA',
'Cheong AMY, Lam HY, Siong KH, Chan HHL, Tsang WWN, Li RW, Leat SJ. (Oct 2015) Effects of eye movements on postural sway in community dwelling older adults. American Academy of Optometry, New Orleans, Louisiana ,USA',
'Webb BS, McGraw, PV, Levi DM, Li RW. (Aug, 2015) The perceptual costs and benefits of learning to multitask. European Conference on Visual Perception, Liverpool, UK',
'Leung TW, Li RW & Kee CS. (July 2015) The effects of anti-blue light lenses on visual and biological function. Macular Carotenoids Conference. Cambridge, UK.',
'Tran, KD, Ngo C., Bui, J, Yang, E, Levi DM & Li RW. (May 2015) Enhancing tolerance of image motion through perceptual learning: Static and dynamic bisection acuity. ARVO, Denver, CO, USA.',
'Leung TW, Li RW, & Kee CS (May 2015) The retinal thickness and anterior/posterior ocular biometry in Chinese myopic eyes with and without high astigmatism. ARVO, Denver, CO, USA.',
'Tran K, Ngo C, Yang E, Bui J, Chat S, Dion Z, Levi DM, Li RW. (Nov 2014) Enhancing tolerance of image motion through perceptual learning: Static and dynamic bisection acuity. American Academy of Optometry, Denver, CO, USA.',
'Chung STL, Kumar G, Li RW & Levi DM (May 2014) Fixation Stability and fixational eye movements in amblyopia. ARVO, Orlando, FL, USA.',
'* Wu T, Craven A, Tran T, Tran K, Levi DM & Li RW (May 2014) Enhancing coarse-to-fine stereo vision by perceptual learning: An asymmetric transfer across spatial frequency spectrum. ARVO, Orlando, FL, USA. ',
'* So, K., Wu, T., Tran, T., Craven, A., Tran, K., Levi DM & Li RW (May 2014) Interocular acuity differences alter the size tuning function of stereopsis. ARVO, Orlando, FL, USA.',
'*Craven, A., Tran, K., Wu, T., Tran, T., So, K., Levi DM & Li RW (Oct 2013) Enhancing coarse-to-fine stereo vision by perceptual learning: An asymmetric transfer across spatial frequency spectrum. American Academy of Optometry, Seattle, WA, USA. ',
'Wu, T., Tran, T., Tran, K., So, K., Craven, A., Levi DM & Li RW (Oct 2013) Interocular acuity differences alter the size tuning function of stereopsis. American Academy of Optometry, Seattle, WA, USA.',
'Ngo C, Levi DM & Li RW (Oct 2013) Video game experience improves temporal processing in adult amblyopia. American Academy of Optometry, Seattle, WA, USA. [Paper]',
'Tran, T., So, K., Nguyen C., Leung TW, Chat, S. W., Levi DM, & Li RW (May 2013) Enhancing stereoacuity through perceptual learning in normal vision: Specificity for spatial frequency and orientation. ARVO, Seattle, WA, USA.',
'Craven, A., Truyet, T., Gustafson, K., Chat, S. W., Levi DM & Li RW (May 2013) Interocular acuity differences alter the spatial frequency tuning of stereopsis. ARVO, Seattle, WA, USA.',
'Ngo C, Truyet, T., Nguyen C., Levi DM, & Li RW (May 2013) Video game experience improves temporal processing in adult amblyopia. ARVO, Seattle, WA, USA.',
'* Craven, A., Gustafson, K., Truyet, T., Chat, S. W. Levi DM, & Li RW (Oct 2012) Interocular acuity differences alter the spatial frequency tuning of stereopsis. American Academy of Optometry. Phoenix, AZ, USA',
'* Truyet, T., Nguyen C., Leung, T.W., Chat, S. W., Levi DM, & Li RW (Oct 2012) Enhancing stereoacuity through perceptual learning in normal vision: Specificity for spatial frequency and orientation. American Academy of Optometry. Phoenix, AZ, USA  [Paper]',
'Li RW, Gustafson, K., Chat, S., & Levi DM (May 2012) Towards establishing a new treatment protocol for improving stereovision in patients with amblyopia. ARVO, Fort Lauderdale, Florida, USA.',
'Chung, S. T. L., Li RW, Levi, D. M (May 2012) A "fuller" report on mislocation errors in visual crowding. Vision Sciences Society. Naple, Florida, USA',
'Astle, A. T., Li RW, McGraw, P. V., Webb, B. S. & Levi,  D. M. (Dec 2011) The magnitude of perceptual learning is equated when stimuli are scaled according to cortical magnification factor. Applied Vision Association meeting AVA. York, UK',
'Li RW, Luu, J., Ngo C, Yuen, J., Yang, S. X., Wong, C., Chat, S. W. & Levi DM (Nov 2010) Improving stereoacuity in previously treated non-strabismic amblyopia through perceptual learning: A novel treatment approach for subnormal stereopsis. American Academy of Optometry. San Francisco, California, USA.',
'Chat, S. W., Li RW, Jang E., & Levi DM (May 2010) Reduced sampling efficiency can explain the elevated Vernier threshold with aging: Vernier acuity in positional noise. ARVO, Fort Lauderdale, Florida, USA.'

  ]
  const items2009 = [
    'Li RW, Ngo C, Chat, S. W., & Levi DM (Nov 2009) Reduced sampling efficiency can explain the elevated Vernier threshold with aging: Vernier acuity in positional noise. American Academy of Optometry. Orlando, Florida, USA.',
'*Ngo C, Li RW, Wei, L., & Levi DM (Nov 2009) The Specificity of Learning Static and Dynamic Bisection Acuity: Speed and Configural Orientations. American Academy of Optometry. Orlando, Florida, USA.',
'Chung, S. T. L., Li RW, Levi, D. M & Behnam N. (May 2009) Improving acuity and reducing crowding in strabismic amblyopia through perceptual learning. ARVO, Fort Lauderdale, Florida, USA.',
'* Ngo C, Li RW, Wei, L., Ren D., Jang E., & Levi DM (May 2009) Improving Static and Dynamic Bisection Acuity through Perceptual Learning. ARVO, Fort Lauderdale, Florida, USA.',
'* Ngo C, Li RW, Levi DM, & Saarinen J. (Oct 2008). The specificity of learning position discrimination: noise and stimulus feature. American Academy of Optometry. Anaheim, California, USA.',
'Li RW, Ngo C, Nguyen, J., Lam, J., & Levi DM (April 2008) Playing video game enhances visual acuity and visual attention in adult amblyopia. ARVO, Fort Lauderdale, Florida, USA. [Paper]',
'Li RW, & Levi DM (Oct 2007) Extended perceptual learning of Vernier acuity in adult amblyopia: An intensive amblyopia treatment study. American Academy of Optometry. Tempa, Florida, USA.',
'Li RW, Provost, A., & Levi DM (Oct 2007) Extended perceptual learning results in substantial recovery of positional and visual acuities in juvenile amblyopia. American Academy of Optometry. Tempa, Florida, USA.',
'Chung, S. T. L., Li RW, Levi DM & Je. E (Oct 2007) Improvement in sensitivity in identifying low-contrast letters following perceptual learning in observers with amblyopia. American Academy of Optometry. Tempa, Florida, USA.',
'Levi DM & Li RW (August 2007) Extended perceptual learning results in improved position acuity and highly efficient perceptive fields in adult amblyopia. European Conference on Visual Perception. Arezzo, Tuscany, Italy',
'Levi DM & Li RW (August 2007) Extended perceptual learning results in improved position acuity and highly efficient perceptive fields in adult amblyopia. Bay Area Vision Research Day. Berkeley, CA ',
'Li RW, Ngo C, Levi DM, & Saarinen J. (May 2007). The specificity of learning position discrimination: noise and stimulus feature. Vision Sciences Society. Sarasota, Florida, USA, USA.',
'Levi DM & Li RW (May 2007) Psychophysical reverse correlation – a new tool for learning about learning in normal and amblyopic vision. Vision Sciences Society. Sarasota, Florida, USA.',
'Li RW, & Levi DM (May 2007) “Slow” perceptual learning of Vernier acuity in adult amblyopia: An intensive amblyopia treatment study. ARVO, Fort Lauderdale, Florida, USA.',
'Li RW, Provost, A., Nguyen, J., Young, K. G., Levi DM, & Hoenig, P. (May 2006). The limits of perceptual learning in previously untreated amblyopia: an intensive case study. Vision Sciences Society. Sarasota, Florida, USA.',
'Kumar, M., Li RW, Levi, D. M, Chat, S. W., & MacKeben, M. (May 2006). Decreasing visual subitising performance with age. Vision Sciences Society. Sarasota, Florida, USA.',
'Chung, S. T. L.., Li RW, & Levi DM (May 2006). Performance for identifying contrast-defined letters in adults with amblyopia benefits from perceptual learning. ARVO, Fort Lauderdale, Florida, USA.',
'Chung, S. T. L.., Li RW, & Levi DM (May 2006). Crowding between first- and second-order letter stimuli. Vision Sciences Society. Sarasota, Florida, USA.',
'* Li RW, Nguyen, J., Provost, A., Young, K. G., Hoenig, P., & Levi DM (Dec 2005). The limits of perceptual learning in a previously untrained amblyope: an intensive case study. American Academy of Optometry. San Diego, California, USA.',
'Li RW, Young, K. G., Hoenig, P., Nguyen, J. & Levi DM (May 2005). Perceptual learning improves visual performance in children with amblyopia. ARVO, Fort Lauderdale, Florida, USA.',
'* Young, K. G., Li RW, Levi DM, & Klein SA (May 2005). Interocular specificity in perceptual learning of a position discrimination task. ARVO, Fort Lauderdale, Florida, USA.',
'Chung, S. T. L., Levi DM, & Li RW (May 2005). Learning to identify contrast-defined letters in peripheral vision. Vision Sciences Society. Sarasota, Florida, USA',
'Li RW, & Levi DM (April 2004). Characterizing the mechanisms of improvement for position discrimination in adult amblyopia. ARVO, Fort Lauderdale, Florida, USA.',
'* Young, K. G., Li RW, Levi DM, Klein SA, & Huang, E. Y. (April 2004). Interocular transfer in perceptual learning of a Vernier task. ARVO, Fort Lauderdale, Florida, USA.',
'Li RW, Levi DM, & Klein S. A.  (May 2003). Spatial noise provides new insights into the “receptive field” for Vernier acuity. Vision Sciences Society. Sarasota, Florida, USA',
'Edwards MH, Li RW, Lam, C. S. Y., Lew, K. F., & Yu, S.Y. (November 2002). The Hong Kong Progressive Lens Myopia Control Study: design and main findings. The 9th International Conference on Myopia. Hong Kong, China.',
'Li RW & Levi DM (October 2002). Mechanisms of perceptual learning for Vernier acuity. Fall Vision Meeting. San Francisco, California, USA ',
'Edwards MH, Li RW, Lam, C. S. Y., Lew, K. F. & Yu, S.Y. (December 2001). The Hong Kong progressive lens myopia control study: Design of a double-masked, randomised clinical trial. Symposium on Myopia, and Other Disorders of Refraction, Accommodation, and Oculomotor System. Moscow Helmholtz Research Institute for Eye Diseases, Russia.',
'Wolffsohn, J. S., Gilmartin, B., Li RW, Edwards, M., Chat, S., Lew, J., & Yu, B. (December 2001). Accommodative hysteresis in pre-adolescent Hong Kong Chinese. Symposium on Myopia, and Other Disorders of Refraction, Accommodation, and Oculomotor System. Moscow Helmholtz Research Institute for Eye Diseases, Russia.',
'Schmid, K. L., Iskander, D. R., Li RW, Lew, J. K. F., & Edwards MH (July 2000). Blur sensitivity in childhood myopia. The 8th International Conference on Myopia, Boston, MA, USA.',
'Li RW, Edwards MH, & Brown B (April 1997) The Electrophysiological Assessment of Vernier Acuity. The postgraduate student conference, Hong Kong. [Paper]'

  ]
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Presentations
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
   
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-04.JPG"
                        alt="image"
                        fill
                        className=" object-center"
                      />
                    </div>
                  </div>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    2020-Current
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {item2029.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>
                  
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    2010-2019
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {items2019.map((item, index) => (
                  <li style={{ fontSize: '15px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    2000-2009
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {items2009.map((item, index) => (
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
