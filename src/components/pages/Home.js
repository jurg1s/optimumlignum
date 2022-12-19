import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="hero_image row">
        <div className="hero_text row-6 col-lg-6 ">
          <h2>Optimum Lignum</h2>
          <h5>
            Naudojant modernias technologijas ir patyrusią komandą, mes siekiame
            užtikrinti patrauklias ir patvarias baldų ir medienos paslaugas,
            kurios atitiks jūsų lūkesčius
          </h5>
          <p>
            Sveiki atvykę į Optimum Lignum. Mes esame medžių gavybos ir
            apdirbimo kompanija. Mes siekiame pasiūlyti aukščiausios kokybės
            medienos produktus mūsų klientams. Mūsų komanda yra patyrusi ir
            profesionali, sugebanti suderinti efektyvumą ir dėmesingumą
            aplinkai. Mes dirbame tik su atsakingai gauta mediena, siekiame
            sumažinti mūsų pėdsaką gamtoje ir užtikrinti, kad mūsų veikla būtų
            tvari. Mes tikime, kad mūsų produktai teiks daugelį metų malonumą ir
            naudą mūsų klientams. Ačiū, kad pasirinkote mus!
          </p>
        </div>
        <div className="hero_empty row-6 col-lg-6">
          <p>www.optimumlignum.com</p>
        </div>
      </div>
      <div className="image_backround">
        <img src="/images/wood-interior-2.3.jpg" alt="" />
      </div>
      <div class="homecontainer">
        <div className="container">
          <div className="home_content">
            <h2>Sveiki!</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
