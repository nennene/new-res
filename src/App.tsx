
import './App.css'
import card from './card.tsx'
import hero from './hero.tsx'
import nav from './nav.tsx'
import footer from './footer.tsx';
function App() {

  const heroSection = hero();
  const navSection = nav();
  const footerSection = footer();
  const cardSection = card();
  return (
    <div className="App">
      {navSection}
      {heroSection}
      {cardSection}
       {footerSection}
    </div>
  )
}

export default App
