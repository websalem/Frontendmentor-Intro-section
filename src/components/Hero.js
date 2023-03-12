import heroImgDesk from '../images/image-hero-desktop.png';
import heroImgMob from '../images/image-hero-mobile.png';
import databiz from '../images/client-databiz.svg';
import audio from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';


function Hero() {

    return (
        <main>
            <section className="hero-text">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <button className='btn'>Learn more</button>
                <div className='clients'>
                    <img src={databiz} alt="client Databiz" />
                    <img src={audio} alt="client Audiophile" />
                    <img src={meet} alt="client meet" />
                    <img src={maker} alt="client maker" />
                </div>
            </section>
            <section className="hero-img">
                <picture>
                    <source media="(min-width: 768px)" srcSet={heroImgDesk} />
                    <img src={heroImgMob} alt="hero" />
                </picture>
            </section>
        </main>
    )
}
export default Hero;