import { useRef, useState } from 'react';

import FormModal from './components/FormModal';
import Header from './sections/Header';
import Footer from './sections/Footer';
import SearchSection from './sections/SearchSection';
import AboutSection from './sections/AboutSection';

import { modalOpenType } from './utils/types';
import { questionData } from './utils/mocdata';

function App() {
  const [modalOpen, setModalOpen] = useState<modalOpenType>({ first: true, open: false });
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-4 bg-gray-200">
      {modalOpen.open && <FormModal onClose={() => setModalOpen({ first: false, open: false })} data={questionData} />}

      <Header scrollRef={aboutRef}></Header>
      <SearchSection modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <AboutSection ref={aboutRef} />
      <Footer />
    </div>
  )
}

export default App
