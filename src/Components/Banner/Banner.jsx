import BannerImgHome from "../../Assets/Banner_home.png"
import BannerImgAbout from "../../Assets/Banner_about.png"


import './Banner.css'

function Banner({ page, content }) {
    let imageSrc;
    if (page === "home") {
    imageSrc = BannerImgHome;
} else {
    imageSrc = BannerImgAbout;
}
    return (
        <div className='banner'>
            <img src={ imageSrc} alt='Photos de montagne'></img>
            <div className='bannerText'>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Banner;