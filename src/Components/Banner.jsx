import BannerImg from "../Assets/Banner_home.png"

import './Banner.css'

function Banner({ page, content }) {
    return (
        <section className='banner'>
            <img src={BannerImg} alt='Photos de montagne'></img>
            <div className='bannerText'>
                <p>{content}</p>
            </div>
        </section>
    );
};

export default Banner;