import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import DataLogements from '../../Data/logements.json'
import ArrowLeft from '../../Assets/arrow_left.png'
import ArrowRight from '../../Assets/arrow_right.png'
import './Slider.css'

// Création de la fonction composant le carousel d'images pour les pages logements

function Slider() {
    const { id } = useParams()
    const location = DataLogements.find((location) => location.id === id) 

    const [slide, setSlide] = useState(0)
    
    //Défilement illimité des images 
    const prevPicture = () => {
        setSlide(slide === 0 ? location.pictures.length - 1 : slide - 1)
    }

    const nextPicture = () => {
        setSlide(slide === location.pictures.length - 1 ? 0 : slide + 1)
    }

    // S'il y a plus d'une image, les flèches et la numérotation est affichée
    if (location.pictures.length > 1) {
        return (
        
        <section className='carousel'>
            <div className='container'>  
                {location.pictures.map((picture, index) => (
                    <img
                        src={picture}
                        alt={location.title}
                        key={index}
                        className={slide === index ? "slide" : "slidehidden"}
                    />    
                ))}
                <img 
                    src={ArrowLeft} 
                    alt="Flèche de gauche" 
                    className='arrowleft arrow'
                    onClick={prevPicture}
                />
                <img 
                    src={ArrowRight} 
                    alt="Flèche de droite" 
                    className='arrowright arrow' 
                    onClick={nextPicture}
                />
                <span className='slide-number'>
                    {slide + 1}/{location.pictures.length}
                </span>
            </div>
        </section>

    )
    // S'il n'y a qu'une image, on n'affiche pas les flèches de navigation et la numérotation
    } else {
        return (
            <section className='carousel'>
                <div className='container'>  
                    {location.pictures.map((picture, index) => (
                        <img 
                            src={picture}
                            alt={location.title}
                            key={index}
                            className={slide === index ? "slide" : "slidehidden"}
                        />    
                    ))}
                </div>    
            </section>
        )
    }
    
}

export default Slider 