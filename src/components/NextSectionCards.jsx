import '../css/nextsectioncard.css';

export default function NextSectionCards({image, title, description}) {
    return(
        <div id="nextsectioncards">
            <img src={image} alt={title} />
            <div className="nextsectioncardstext">
                <h1> {title} </h1>
                <p> {description} </p>
            </div>

        </div>
    )
}