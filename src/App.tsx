import './App.module.scss'
import Layout from './components/layout/layout'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainTitle from './components/main/mainTitle/mainTitle'
import Technology from './components/main/technology/technology'
import { BrowserRouter } from 'react-router-dom'
import Skills from './components/main/skills/skills';
import AdvantagesClient from './components/main/advantagesClient/advantagesClient';
import AdvantagesBuisnes from './components/main/advantagesBuisnes/advantagesBuisnes';
import Stages from './components/main/stages/stages';
import Team from './components/main/team/team';
import Cost from './components/main/cost/cost';
import Compare from './components/main/compare/compare';
import Contacts from './components/main/contacts/contacts';

function App() {

  return (
    <BrowserRouter>
     <Layout>
      <Header />
      <main>
        <MainTitle />
        <Skills />
        <Technology />
        <AdvantagesClient />
        <AdvantagesBuisnes />
        <Stages/>
        <Team />
        <Cost />
        <Compare />
        <Contacts/>
      </main>
      <Footer />
    </Layout>
    </BrowserRouter>
  )
}

export default App
