import QuizQuestion from "./QuizQuestion";

export default function Quiz({occurenceData, speciesData, index}: {occurenceData: any, speciesData: any, index: number}) {

    return (
        <div className="Quiz">
            <ul>
                <li className="Quiz-Item">
                <QuizQuestion context={"Kingdom"} occurenceData={occurenceData} index={index}></QuizQuestion>               
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Phylum"} occurenceData={occurenceData} index={index}></QuizQuestion>       
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Order"} occurenceData={occurenceData} index={index}></QuizQuestion>               
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Family"} occurenceData={occurenceData} index={index}></QuizQuestion>                
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Genus"} occurenceData={occurenceData} index={index}></QuizQuestion>                
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Species"} occurenceData={occurenceData} index={index}></QuizQuestion>                   
                </li>
            </ul>
        </div>
    );
}