import {logo} from '../assets'

function Hero() {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' 
        className='w-28 object-contain'/>
        <button 
        type='button'
        onClick={() => window.open('https://github.com/GreekHarvardDev/GPT-4-Summarizer-Website')} //ADD OWN LINK HERE LATER
        className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text'>
        Lazy Summaries with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Too lazy to read all that? Let AI do it for you, paste the link of the article and let AI summarize it for you!
      </h2>
    </header>
  )
}

export default Hero