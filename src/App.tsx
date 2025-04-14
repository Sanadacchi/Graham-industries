import SplineScene from './components/SplineScene';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="bg-black relative w-full min-h-screen overflow-hidden">
      <div className="container mx-auto px-8 min-h-screen relative">
        <div className="py-8 pt-20 w-[524] flex flex-col justify-center">
          <Hero />
          <CTA />
        </div>
        <div className="w-[500] absolute top-[5rem] right-[0] hidden lg:block">
          <SplineScene/>
        </div>
      </div>
      <Cards />
      <Stats />
      <Sponsors/>
    </div>
    )
}

export default App
