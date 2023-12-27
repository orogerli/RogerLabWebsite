import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const BlogDetailsPage = () => {
  const item2029=[
    'Li RW, Li BZ, Chat SW, Patel SS, Chung STL & Levi DM (submitted) Stereoscopic 3D video games boost depth perception.',
'Leung TW, Li RW, Kee CS (2023, in press) Brief Adaptation to Astigmatic Blur Reduces Meridional Anisotropy in Contrast Sensitivity. Investigative Ophthalmology and Visual Science',
'Leung TW, Li RW, Kee CS (2021) Meridional Anisotropy of Foveal and Peripheral Resolution Acuity in Adults with Emmetropia, Myopia and Astigmatism. Investigative Ophthalmology and Visual Science, 62, e11',
'Levi DM, Li RW, Silver ME, Chung ST (2020). Sequential perceptual learning of letter identification and uncrowding in normal peripheral vision: Effects of task, training order, and cholinergic enhancement. Journal of Vision',
'Li RW, Tran KD, Bui J, Antonucci M, Ngo C & Levi DM (2018) Improving adult amblyopic vision with stereoscopic 3D video games. Ophthalmology, 125, 1660',
'Chung ST, Li RW, Silver ME, Levi DM (2017). Donepezil does not enhance perceptual learning in adults with amblyopia: a pilot study. Frontiers in Neuroscience, 11: e448',
'Leung TW, Li RW, Kee CS (2017) Blue-light filtering spectacle lenses: optical and clinical performances. PLoS One, 12, 0169114',
'Li RW, So W, Wu TH, Craven AP, Tran TT, Gustafson KM & Levi DM (2016) Monocular blur alters the tuning characteristics of stereopsis for spatial frequency and size.  Royal Society Open Science, 3: e160273.',
'Li RW, Tran TT, Craven A, Leung TW, Chat SW & Levi DM (2016) Enhancing coarse-to-fine stereo vision by perceptual learning: Asymmetric transfer across spatial frequency spectrum. Royal Society Open Science, 3, e150523.',
'Chung STL, Kumar G, Li RW, & Levi DM (2015) Characteristics of Fixational Eye Movements in Amblyopia: Limitations on Fixation Stability and Acuity? Vision Research, 114, 87-99',
'Li RW, Ngo C, & Levi DM (2015) Relieving the Attentional Blink in the Amblyopic Brain with Video Games. Scientific Reports,5, e8483.'


  ]
  const items2019 =[
    'Li RW, Tran KD, Bui J, Antonucci M, Ngo C & Levi DM (2018) Improving adult amblyopic vision with stereoscopic 3D video games. Ophthalmology, 125, 1660.',
'Chung ST, Li RW, Silver ME, Levi DM (2017). Donepezil does not enhance perceptual learning in adults with amblyopia: a pilot study. Frontiers in Neuroscience, 11: e448.',
'Leung TW, Li RW, Kee CS (2017) Blue-light filtering spectacle lenses: optical and clinical performances. PLoS One, 12, 0169114.',
'Li RW, So W, Wu TH, Craven AP, Tran TT, Gustafson KM & Levi DM (2016) Monocular blur alters the tuning characteristics of stereopsis for spatial frequency and size.  Royal Society Open Science, 3: e160273.',
'Li RW, Tran TT, Craven A, Leung TW, Chat SW & Levi DM (2016) Enhancing coarse-to-fine stereo vision by perceptual learning: Asymmetric transfer across spatial frequency spectrum. Royal Society Open Science, 3, e150523.',
'Chung STL, Kumar G, Li RW, & Levi DM (2015) Characteristics of Fixational Eye Movements in Amblyopia: Limitations on Fixation Stability and Acuity? Vision Research, 114, 87-99.',
'Li RW, Ngo C, & Levi DM (2015) Relieving the Attentional Blink in the Amblyopic Brain with Video Games. Scientific Reports,5, e8483.',
'Astle AT, Li RW, Webb BS, Levi DM & McGraw PV. (2013) A Weber-like law for perceptual learning. Scientific Reports, 3, e1158.',
'Chung STL, Li RW, & Levi DM (2012) Learning to identify near-acuity letters, either with or without flankers, results in improved letter size and spacing limits in adults with amblyopia. PLoS One, 7, e35829.',
'Li RW, Ngo C, Nguyen J & Levi DM (2012) Video game play induces plasticity in the visual system of adults with amblyopia: Video games improve “lazy eye” in adults. Ophthalmology Update, 10, 29-33 [Invited Excerpt Report].',
'Li RW, Brown, B, Edwards MH, Ngo C, Chat SW & Levi DM (2012) Reduced sampling efficiency can explain the elevated Vernier threshold with aging: Vernier acuity in positional noise. Scientific Reports, 2, e300.',
'Li RW, Ngo C, Nguyen, J. & Levi DM (2011) Video game play induces plasticity in the visual system of adults with amblyopia, Public Library of Science Biology, 9, e1001135.',
'Bavelier D, Levi D, Li RW, Dan Y & Hensch TK. (2010) Removing brakes on adult brain plasticity: from molecular to behavioral interventions. Journal of Neuroscience, 30, 14964-14971.',
'Li RW, MacKeben M, Chat SW, Kumar M, Ngo C & Levi DM (2010) Age and visual counting. PLoS One, 18, e13434.'

  ]
  const items2009 = ['Levi DM, & Li RW (2009) Perceptual Learning as a potential treatment for amblyopia. Vision Research, 49, 2535-2549.',
  'Levi DM, & Li RW (2009) Improving the performance of the amblyopic visual system. Philosophical Transactions of the Royal Society B: Biological Sciences, 364, 399-407. [Invited Review Paper]',
  'Li RW, Klein SA, & Levi DM (2008) Prolonged perceptual learning of positional acuity in adult amblyopia: Perceptual template retuning dynamics. Journal of Neuroscience, 28, 14223-14229. ',
  'Chung STL, Li RW, & Levi DM (2008) Learning to Identify Near-Threshold Luminance-Defined and Contrast-Defined Letters in Observers with Amblyopia. Vision Research, 48, 2739-2750.',
  'Chung STL, Li RW, & Levi DM (2008) Crowding between first- and second-order letters in amblyopia. Vision Research, 48, 788-798 [Biweekly Issue Cover Picture]',
  'Li RW, Provost A, & Levi DM (2007) Extended perceptual learning results in substantial recovery of both positional acuity and visual acuity in juvenile amblyopia Investigative Ophthalmology and Visual Science, 48, 5046-5051. ',
  'Wei L, Levi DM, Li RW, & Klein SA (2007) Feasibility study on a hyperacuity device with motion uncertainty: two-point stimuli. IEEE Transactions on Systems, Man and Cybernetics. Part B Cybernetics 37:385-397',
  'Chung STL, Li RW, & Levi DM (2007) Crowding between first- and second-order letter stimuli in normal foveal and peripheral vision. Journal of Vision, 7, 1-13.',
  'Chung STL, Li RW, & Levi DM (2006) Identification of contrast-defined letters in adults with amblyopia benefits from perceptual learning. Vision Research, 46, 3853-3861.',
  'Li RW, Klein SA, & Levi DM (2006) The ‘receptive field’ for position acuity changes with feature separation. Journal of Vision, 6, 4, 311-321.',
  'Chung STL, Levi DM, & Li RW (2006) Learning to identify contrast-defined letters in peripheral vision. Vision Research, 46, 1038-1047.',
  'Li RW, Young KG, Hoenig P, & Levi DM (2005) Perceptual learning improves visual perception in juvenile amblyopia. Investigative Ophthalmology and Visual Science, 46, 3161-3168. ',
  'Levi DM, Li RW, & Klein SA (2005) “Phase capture” in amblyopia: the influence function for sampled shape. Vision Research, 45, 1793-1805.',
  'Li RW, & Levi DM (2004) Characterizing the mechanisms of improvement for position discrimination in adult amblyopia. Journal of Vision, 4, 476-487. ',
  'Li RW, Levi DM & Klein SA (2004) Perceptual learning improves efficiency by re-tuning the “template” for position discrimination. Nature Neuroscience. 7, 178-183. ',
  'Levi DM, Li RW, & Klein SA (2003) “Phase capture” in the perception of interpolated shape: cue combination and the influence function. Vision Research, 43, 2233-2243.',
  'Edwards MH, Lam CSY, Li RW (2003) Author Response: A Reanalysis of Myopia Control with Progressive Addition Lenses. Investigative Ophthalmology and Visual Science (Electronic letters)',
  'Wolffsohn JS, Gilmartin B, Li RW, Edwards MH, Chat SW, Lew JKF & Yu B. (2003). Nearwork-induced transient myopia in preadolescent Hong Kong Chinese. Investigative Ophthalmology and Visual Science, 44, 2284-2289.',
  'Schmid KL, Li RW, Edwards MH, & Lew JKF. (2003). The expandability of the eye in childhood myopia. Current Eye Research, 26, 65-71.',
  'Edwards MH, Li RW, Lam CSY, Lew JKF & Yu BSY. (2002). The Hong Kong progressive lens myopia control study: study design and main findings. Investigative Ophthalmology and Visual Science, 43, 2852-2858. ',
  'Schmid KL, Iskander DR, Li RW, Edwards MH, & Lew JKF. (2002). Blur detection thresholds in childhood myopia: single and dual target presentation. Vision Research, 42, 239-247.',
  'Li RW, Edwards MH, & Brown B. (2001). Variation in Vernier evoked cortical potential with Age. Investigative Ophthalmology and Visual Science, 42, 1119-1124. ',
  'Li RW, & Edwards MH. (2001). Interfacing the Shin-Nippon natural vision autorefractor SRW-5000 with a personal computer. Ophthalmic and Physiological Optics, 21, 114-116.',
  'Li RW, Edwards MH & Brown B. (2000). Variation in Vernier acuity with age. Vision Research, 40, 3775-3781.',
  ]
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Publications
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
   
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-03.jpg"
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
                  <li style={{ fontSize: '10px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    2010-2019
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {items2019.map((item, index) => (
                  <li style={{ fontSize: '10px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
                  ))}
                  </ul>

                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    2000-2009
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                  {items2009.map((item, index) => (
                  <li style={{ fontSize: '10px' }} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg" key={index}>{item}</li>
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
