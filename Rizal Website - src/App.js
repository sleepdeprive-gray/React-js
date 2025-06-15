import React, { useState } from 'react';
import './App.css';

// Images
import logo from './assets/image/logo.png';
import spainImg from './assets/image/spain.avif';
import parisImg from './assets/image/paris.jpg';
import berlinImg from './assets/image/berlin.webp';
import jrizzSpain from './assets/image/jrizz-spain.jpg';
import jrizzParis from './assets/image/jrizz-paris.jpg';
import jrizzBerlin from './assets/image/jrizz-berlin.jpg';

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <header className="logo-title">
        <img src={logo} alt="logo" />
        <h1 id="page-title">Jose Rizal: His Travels and Legacy</h1>
      </header>

      <div className="picker">
        <div className="card" onClick={() => openModal('spain')}>
          <img src={spainImg} alt="Rizal in Spain" />
          <div className="details">
            <h3>Spain</h3>
            <p>Studied in Madrid, wrote “Amor Patrio”, joined Freemasonry.</p>
          </div>
        </div>

        <div className="card" onClick={() => openModal('paris')}>
          <img src={parisImg} alt="Rizal in Paris" />
          <div className="details">
            <h3>Paris</h3>
            <p>Worked with Juan Luna, posed for artworks, learned flute.</p>
          </div>
        </div>

        <div className="card" onClick={() => openModal('berlin')}>
          <img src={berlinImg} alt="Rizal in Berlin" />
          <div className="details">
            <h3>Berlin</h3>
            <p>Published Noli Me Tangere, met scientists, endured hardship.</p>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {activeModal === 'spain' && (
        <div className="modal">
          <div className="modal-box">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-flex">
              <div className="modal-story">
              <h2>Rizal in Spain</h2>
              <p>
                On <strong>May 3, 1882</strong>, José Rizal departed the Philippines aboard the steamer <em>Salvadora</em>, beginning a journey that would shape his vision for reform. He traveled under a pseudonym without his parents' knowledge, supported financially and emotionally by his brother Paciano and close friends like Antonio Rivera. His “secret mission” was to complete his studies in Europe and observe the conditions of Western civilization to aid in the development of the Philippines.
              </p>
              <p>
                Rizal’s journey took him to <strong>Singapore</strong> (where he stayed at Hotel de la Paz), <strong>Colombo (Sri Lanka)</strong>, the <strong>Suez Canal</strong>, <strong>Port Said (Egypt)</strong>, <strong>Naples (Italy)</strong>, and <strong>Marseilles (France)</strong>. Finally, he reached <strong>Barcelona, Spain in June 1882</strong>, where he was warmly welcomed by the Filipino community. It was here that Rizal wrote his first patriotic essay, <em><a href="https://www.officialgazette.gov.ph/1962/08/20/amor-patrio/" target="_blank">“Amor Patrio”</a></em> (Love of Country), originally published in *Diariong Tagalog*.
              </p>
              <p>
                Later, Rizal moved to <strong>Madrid</strong>, where he enrolled at the <em>Universidad Central de Madrid</em>. He studied both <strong>Medicine</strong> and <strong>Philosophy and Letters</strong>, while also taking courses in the arts, science, and languages. By 1885, he had completed his Licentiate in Medicine, though he also pursued a Doctorate. During his time in Spain, Rizal became heavily involved in reformist movements, writing for newspapers and joining organizations such as <em>Freemasonry</em> through the Lodge Solidaridad to advocate for Filipino rights.
              </p>
              <p>
                Despite financial struggles, Rizal found ways to support himself, often relying on his brother Paciano’s remittances. He also formed friendships with Spanish reformists like Don Miguel Morayta and was romantically involved with <strong>Consuelo Ortiga y Perez</strong>, the daughter of a prominent Spanish official. Rizal’s stay in Spain was also marked by cultural pride, especially when he witnessed the triumph of Filipino artists Juan Luna and Félix Resurrección Hidalgo in the <a href="https://kahimyang.com/kauswagan/articles/1193/today-in-philippine-history-june-25-1884-jose-rizal-gave-a-toast-to-juan-luna-and-felix-resurreccion-hidalgo" target="_blank">1884 Madrid Exposition</a>.
              </p>
              <p>
                His years in Spain solidified his identity as a reformist intellectual and laid the groundwork for his future writings, including <em>Noli Me Tangere</em>, which he would later complete and publish in Berlin.
              </p>
              <p>
                🔗 Sources:  
                <a href="https://www.officialgazette.gov.ph/1962/08/20/amor-patrio/" target="_blank">Amor Patrio – Official Gazette</a> | 
                <a href="https://kahimyang.com/kauswagan/articles/1193/today-in-philippine-history-june-25-1884-jose-rizal-gave-a-toast-to-juan-luna-and-felix-resurreccion-hidalgo" target="_blank"> Kahimyang</a> |
                <a href="https://ncca.gov.ph/about-culture-and-arts/culture-profile/jose-rizal/" target="_blank"> NCCA on Rizal</a>
              </p>
              </div>
              <div className="modal-side">
                <img src={jrizzSpain} alt="Rizal in Europe" />
                <ul>
                  <a href="https://www.officialgazette.gov.ph/about/gov/jose-rizal/" target="_blank">
                    <li><strong>📅 May 3, 1882:</strong> Left Manila aboard Salvadora</li>
                  </a>
                  <a href="https://kahimyang.com/kauswagan/articles/1601/today-in-philippine-history-may-3-1882-dr-jose-rizal-left-the-philippines-for-spain" target="_blank">
                    <li><strong>🛳️ Route:</strong> Singapore → Sri Lanka → Suez → Italy → France</li>
                  </a>
                  <a href="https://www.britannica.com/place/Barcelona" target="_blank">
                    <li><strong>📍 Arrived:</strong> Barcelona, June 1882</li>
                  </a>
                  <a href="https://filipinojournal.com/amor-patrio-by-dr-jose-rizal/" target="_blank">
                    <li><strong>✍️ Wrote:</strong> “Amor Patrio”</li>
                  </a>
                  <a href="https://www.joserizal.com/jose-rizal-university-of-madrid/" target="_blank">
                    <li><strong>🎓 Studied:</strong> Medicine & Philosophy in Madrid</li>
                  </a>
                  <a href="https://www.officialgazette.gov.ph/about/gov/jose-rizal/#freemasonry" target="_blank">
                    <li><strong>💡 Joined:</strong> Freemasonry & Reformist circles</li>
                  </a>
                  <a href="https://kahimyang.com/kauswagan/articles/1225/today-in-philippine-history-june-27-1884-jose-rizal-was-invited-to-a-party-by-don-pablo-ortiga" target="_blank">
                    <li><strong>❤️ Met:</strong> Consuelo Ortiga y Perez</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'paris' && (
        <div className="modal">
          <div className="modal-box">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-flex">
              <div className="modal-story">
                <h2>Rizal in Paris</h2>
                <p>
                  After finishing his studies in Madrid, José Rizal traveled to <strong>Paris</strong> in late 1885 to specialize in 
                  <a href="https://en.wikipedia.org/wiki/Ophthalmology" target="_blank">ophthalmology</a>, aiming to restore his mother’s eyesight. He studied under renowned ophthalmologists, including 
                  <a href="https://en.wikipedia.org/wiki/Louis_de_Wecker" target="_blank">Dr. Louis de Wecker</a>.
                </p>
                <p>
                  Rizal stayed with the painter <a href="https://en.wikipedia.org/wiki/Juan_Luna" target="_blank">Juan Luna</a> and contributed as a model to his paintings <em>Death of Cleopatra</em> and <em>Blood Compact</em>.  
                  He also befriended fellow Filipinos like <a href="https://en.wikipedia.org/wiki/Maximo_Viola" target="_blank">Maximo Viola</a> and Miguel Morayta.
                </p>
                <p>
                  While in Paris, Rizal immersed himself in arts and sciences. He explored European museums and libraries, attended medical training, and practiced playing the flute.
                </p>
                <p>
                  🔗 Sources:  
                  <a href="https://www.officialgazette.gov.ph/1962/08/20/amor-patrio/" target="_blank">Amor Patrio – Official Gazette</a> | 
                  <a href="https://kahimyang.com/kauswagan/articles/1565/today-in-philippine-history-june-17-1883-jose-rizal-leaves-the-philippines-for-spain" target="_blank"> Kahimyang</a> |
                  <a href="https://ncca.gov.ph/about-culture-and-arts/culture-profile/jose-rizal/" target="_blank"> NCCA on Rizal</a>
                </p>
              </div>
              <div className="modal-side">
                <img src={jrizzParis} alt="Rizal in Paris" />
                <ul>
                  <a href="https://en.wikipedia.org/wiki/Ophthalmology" target="_blank"><li>👁 Studied ophthalmology for his mother</li></a>
                  <a href="https://en.wikipedia.org/wiki/Louis_de_Wecker" target="_blank"><li>🏥 Trained under Dr. Louis de Wecker</li></a>
                  <a href="https://en.wikipedia.org/wiki/Juan_Luna" target="_blank"><li>🎨 Modeled for Juan Luna’s masterpieces</li></a>
                  <a href="https://en.wikipedia.org/wiki/Maximo_Viola" target="_blank"><li>🤝 Met Maximo Viola and Morayta</li></a>
                  <a href="https://en.wikipedia.org/wiki/Flute" target="_blank"><li>🎶 Learned and played the flute</li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'berlin' && (
        <div className="modal">
          <div className="modal-box">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-flex">
              <div className="modal-story">
               <h2>Rizal in Berlin</h2>
                <p>
                  In late 1886, Rizal traveled to <strong>Berlin, Germany</strong>, seeking intellectual growth and a place to complete his novel. Despite financial hardships, he finished 
                  <a href="https://www.gutenberg.org/ebooks/20228" target="_blank"><em> Noli Me Tangere</em></a> in March 1887, with help from his friend <a href="https://en.wikipedia.org/wiki/Maximo_Viola" target="_blank">Maximo Viola</a>.
                </p>
                <p>
                  Rizal became a member of the <a href="https://en.wikipedia.org/wiki/Berlin_Society_of_Anthropology,_Ethnology,_and_Prehistory" target="_blank">Berlin Ethnological Society</a> and the Berlin Anthropological Society, reflecting his keen interest in sciences and humanities. He also studied <strong>botany, zoology, and history</strong> while improving his German.
                </p>
                <p>
                  During this time, he wrote the touching poem <a href="https://www.philippine-embassy.org.sg/the-poem-to-the-flowers-of-heidelberg-by-dr-jose-p-rizal/" target="_blank"><em>To the Flowers of Heidelberg</em></a>. Rizal admired German discipline and scholarship, and his stay in Berlin became one of his most intellectually productive periods.
                </p>
                <p>
                  🔗 Sources:  
                  <a href="https://www.gutenberg.org/ebooks/20228" target="_blank">Read Noli Me Tangere – Project Gutenberg</a> | 
                  <a href="https://www.philippine-embassy.org.sg/the-poem-to-the-flowers-of-heidelberg-by-dr-jose-p-rizal/" target="_blank"> To the Flowers of Heidelberg</a> | 
                  <a href="https://www.britannica.com/biography/Jose-Rizal" target="_blank"> Britannica: Rizal’s Life</a>
                </p>
              </div>
              <div className="modal-side">
                <img src={jrizzBerlin} alt="Rizal in Berlin" />
                <ul>
                  <a href="https://en.wikipedia.org/wiki/Otto_Becker" target="_blank"><li>🧑‍⚕️ Studied under Dr. Otto Becker</li></a>
                  <a href="https://en.wikipedia.org/wiki/To_the_Flowers_of_Heidelberg" target="_blank"><li>🌸 Wrote “To the Flowers of Heidelberg”</li></a>
                  <a href="https://en.wikipedia.org/wiki/Karl_Ullmer" target="_blank"><li>🏡 Lived with Pastor Karl Ullmer</li></a>
                  <a href="https://en.wikipedia.org/wiki/Leipzig" target="_blank"><li>📚 Attended lectures, translated “Wilhelm Tell”</li></a>
                  <a href="https://en.wikipedia.org/wiki/Noli_Me_Tangere_(novel)" target="_blank"><li>📘 Published Noli Me Tangere in Berlin</li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;