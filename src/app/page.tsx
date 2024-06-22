"use client"

    //  Pl@ntNet UUID = 14d5676a-2c54-4f94-9023-1e8dcd822aa0
    //  International Barcode of Life UUID = 040c5662-da76-4782-a48e-cdea1892d14c
    //  Observation.org UUID = 8a863029-f435-446a-821e-275f4f641165
    //  Inaturalist UUID = 50c9509d-22c7-4a22-a47d-8c48425ef4a7

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import QuizPage from './QuizPage'
import Options from './Options'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faGear, faQuestion, faUser, faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Page() {

    const [page, setPage] = useState("quiz")
    const [options, setOptions] = useState("")

    if(page == "quiz") {
        
        return (
            <>
                <nav>
                    <div id="Right-Nav">
                        <div id="Logo">
                            <h1>quercus</h1>
                        </div>
                        <FontAwesomeIcon icon={faLeaf} className="Gear-Icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGear} className="Gear-Icon" onClick={() => setPage("option")}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faQuestion} className="Gear-Icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faBookmark} className="Gear-Icon"></FontAwesomeIcon>
                    </div>
                    <div id="Left-Nav">
                        <FontAwesomeIcon icon={faUser} className="Gear-Icon"></FontAwesomeIcon>
                    </div>
                </nav>
                <QuizPage options={options}></QuizPage>
            </>
        );

    } else if (page == "option") {

        return (
            <>
                <nav>
                    <div id="Right-Nav">
                        <div id="Logo">
                            <h1>quercus</h1>
                        </div>
                        <FontAwesomeIcon icon={faLeaf} className="Gear-Icon" onClick={() => setPage("quiz")}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGear} className="Gear-Icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faQuestion} className="Gear-Icon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faBookmark} className="Gear-Icon"></FontAwesomeIcon>
                    </div>
                    <div id="Left-Nav">
                        <FontAwesomeIcon icon={faUser} className="Gear-Icon"></FontAwesomeIcon>
                    </div>
                </nav>
                <Options setOptions={setOptions}></Options>
            </>
        );

    }
}