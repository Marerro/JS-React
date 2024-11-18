import htmlLogo from '../assets/HTML5.png'; 
import cssLogo from '../assets/CSS-Logo.jpg';
import jsLogo from '../assets/JavaScript.png';
import reactLogo from '../assets/react.png';
import '../logos.css';

function Pictures () {

    const images = [
        {
            src: htmlLogo
        },
        {
            src: cssLogo
        },
        {
            src: jsLogo
        },
        {
            src: reactLogo,
        }
    ];

    return (
        <>
        <div className='container'>
        {images.map((image, index) => (
                <img className='Pmodify' key={index} src={image.src} />
        ))}
        </div>
        </>
    )
}

export default Pictures;