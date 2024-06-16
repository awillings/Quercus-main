import QuizQuestion from "./QuizQuestion";

export default function Quiz(organism) {

    return (
        <div className="Quiz">
            <ul>
                <li className="Quiz-Item">
                <QuizQuestion context={"Kingdom"} organism={organism}></QuizQuestion>               
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Phylum"} organism={organism}></QuizQuestion>       
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Order"} organism={organism}></QuizQuestion>               
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Family"} organism={organism}></QuizQuestion>                
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Genus"} organism={organism}></QuizQuestion>                
                </li>
                <li className="Quiz-Item">
                    <QuizQuestion context={"Species"} organism={organism}></QuizQuestion>                   
                </li>
            </ul>
        </div>
    );
}