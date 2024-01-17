import './animalcontainer.css'

const AnimalContainer = (props) => {
    return (
        <>
            <div className="divAnimalContainer">
                <div className="divTopSection">
                    <figure>{props.img}</figure>
                    <h2>{props.header}</h2>
                    <p className="pAnmlChar">{props.species}</p>
                    <p className="pAnmlChar">{props.habitant}</p>
                    <p className="pAnmlChar">{props.diet}</p>
                    <p className="pAnmlYear">{props.lifespan} Years</p>
                </div>
                <ul>
                    {
                        props.facts.map((f) => {
                            return (
                                <li>
                                    {f}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default AnimalContainer;