import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function QuizQuestion(props) {

    const [correct, setCorrect] = useState(false);

    const handleQuizAnswer = (event) => {
        if(event.key === 'Enter') {
            switch(props.context) {
                case "Kingdom":
                    if(event.target.value.toLowerCase() == props.organism.occurence.results[props.organism.index].kingdom.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Phylum":
                    if(event.target.value.toLowerCase() == props.organism.occurence.results[props.organism.index].phylum.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Order":
                    if(event.target.value.toLowerCase() == props.organism.occurence.results[props.organism.index].order.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Family":
                    if(event.target.value.toLowerCase() == props.organism.occurence.results[props.organism.index].family.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Genus":
                    if(event.target.value.toLowerCase() == props.organism.occurence.results[props.organism.index].genus.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Species":
                    if(event.target.value.toLowerCase() == props.organism.occurence.results[props.organism.index].species.toLowerCase()) {
                        setCorrect(true)
                    }
            }
        }       
    }

    if (correct) {
        return (
            <>
                <label htmlFor="Kingdom">{props.context}: </label>
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <br />    
                <input id="Kingdom" className="Quiz-Input" onKeyDown={handleQuizAnswer}></input>       
            </>
        )
    }


    return (
        <>
            <label htmlFor="Kingdom">{props.context}: </label><br />    
            <input id="Kingdom" className="Quiz-Input" onKeyDown={handleQuizAnswer}></input>       
        </>
    )
}

