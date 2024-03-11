import BannerImgHome from "../../Assets/Banner_home.png"
import BannerImgAbout from "../../Assets/Banner_about.png"
import './Banner.css'

// Création d'une fonction pour afficher la bannière de la page "Home" et la page "à propos"

function Banner({ page, content }) {
    //Utilisation différenciée de l'image en fonction de la page du site
    let imageSrc;
    if (page === "home") {
    imageSrc = BannerImgHome; 
} else {
    imageSrc = BannerImgAbout;
}
    return (
        <div className='banner'>
            <img src={ imageSrc} alt='Photos de montagne'></img>
            <div className='banner-text'>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Banner;