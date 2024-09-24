import linkedinIcon from '../assets/socials_icons/linkedin.svg'
import instagramIcon from '../assets/socials_icons/instagram.svg'
import githubIcon from '../assets/socials_icons/github.svg'
import contactIcon from '../assets/socials_icons/contact.svg'

const Hero = () => {
  const socials = {
    linkedIn: [linkedinIcon, 'https://www.linkedin.com/in/theo-sohlman/'],
    instagram: [instagramIcon, 'https://www.instagram.com/theosohlman/'],
    github: [githubIcon, 'https://github.com/TheoSoh'],
  }

  return (
    <section className='flex flex-col bg-transparent w-full md:w-4/12 md:h-[calc(100vh-(7rem*2))] md:fixed'>
      <h1 className='font-bold text-6xl pb-4'>Theo Sohlman</h1>
      <h2 className='font-semibold text-lg pb-8'>Software Dev./Information Systems Student</h2>
      <p className='text-justify pb-36 lg:pb-0 md:text-left lg:w-2/3'>Eager to apply knowledge and experience to deliver value and innovation. Explore my work and discover how I can contribute to your next project.</p>
      <div className='flex flex-col justify-end w-full h-full'>
        <a 
        className='bg-green w-fit font-mono text-sm border 
        border-graphite rounded-md px-3 mb-6 hover:bg-gradient-to-t
        from-light-green to-green'
        href='/CV_Theo_Sohlman.pdf'
        download='CV_Theo_Sohlman.pdf'
        >
          Download CV
        </a>
        <div className='flex flex-wrap gap-4 w-full h-fit'>
          {Object.values(socials).map(([icon, url], index) =>(
            <a key={index} href={url} target='_blank' rel='noopener noreferrer'>
              <img src={icon} alt='social-icon' className='w-auto h-8 
              border border-graphite rounded-md'
              />
            </a>
          ))}
          <img src={contactIcon} className='w-auto h-8 
          border border-graphite rounded-md'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero