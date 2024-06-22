import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function QuizQuestion({context, occurenceData, index}: {context: string, occurenceData: any, index: number}) {

    const [correct, setCorrect] = useState(false);

    const handleQuizAnswer = (event: any) => {
        if(event.key === 'Enter') {
            switch(context) {
                case "Kingdom":
                    if(event.target.value.toLowerCase() == occurenceData.results[index].kingdom.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Phylum":
                    if(event.target.value.toLowerCase() == occurenceData.results[index].phylum.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Order":
                    if(event.target.value.toLowerCase() == occurenceData.results[index].order.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Family":
                    if(event.target.value.toLowerCase() == occurenceData.results[index].family.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Genus":
                    if(event.target.value.toLowerCase() == occurenceData.results[index].genus.toLowerCase()) {
                        setCorrect(true)
                    }
                case "Species":
                    if(event.target.value.toLowerCase() == occurenceData.results[index].species.toLowerCase()) {
                        setCorrect(true)
                    }
            }
        }       
    }

    if (correct) {
        return (
            <>
                <label htmlFor="Kingdom">{context}: </label>
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                <br />    
                <input id="Kingdom" className="Quiz-Input" onKeyDown={handleQuizAnswer}></input>       
            </>
        )
    }


    return (
        <>
            <label htmlFor="Kingdom">{context}: </label><br />    
            <input id="Kingdom" className="Quiz-Input" onKeyDown={handleQuizAnswer}></input>       
        </>
    )
}

