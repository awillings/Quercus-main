"use client"

    //  Pl@ntNet UUID = 14d5676a-2c54-4f94-9023-1e8dcd822aa0
    //  International Barcode of Life UUID = 040c5662-da76-4782-a48e-cdea1892d14c
    //  Observation.org UUID = 8a863029-f435-446a-821e-275f4f641165
    //  Inaturalist UUID = 50c9509d-22c7-4a22-a47d-8c48425ef4a7

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import Information from './Information'
import Quiz from './Quiz'
 
const fetcher = (URL: string) => fetch(URL).then((res) => res.json()).catch(err => console.log(err));
const falseInit = Math.floor(1000 + Math.random() * 500)

export default function Page() {

    const [offset, setOffset] = useState(falseInit);
    const [index, setIndex] = useState(0)
    const [country, setCountry] = useState("")
    const [stateProvince, setStateProvince] = useState("")
    const [locality, setLocality] = useState("")

    const handleCountryInput = (event) => {
        if(event.key === 'Enter') {
            setCountry(event.target.value)
        }
    }

    const handleStateProvinceInput = (event) => {
        if(event.key === 'Enter') {
            setStateProvince(event.target.value)
        }
    }

    const handleLocalityInput = (event) => {
        if(event.key === 'Enter') {
            setLocality(event.target.value)
        }
    }

    const handleLast = () => {
        if(index == 0) {
            setOffset(prev => prev - 20)
            setIndex(19)
        } else {
        setIndex(prev => prev - 1)
        }
    }

    const handleNext = () => {
        if(index == 19) {
            setOffset(prev => prev + 20)
            setIndex(0)
        } else {
        setIndex(prev => prev + 1)
        }
    }

    let baseOccurenceApiUrl = `https://api.gbif.org/v1/occurrence/search?kingdomKey=6&mediaType=StillImage&stateProvince=${stateProvince}&country=${country}&offset=${offset}&locality=${locality}&datasetKey=040c5662-da76-4782-a48e-cdea1892d14c&datasetKey=14d5676a-2c54-4f94-9023-1e8dcd822aa0&datasetKey=8a863029-f435-446a-821e-275f4f641165&datasetKey=50c9509d-22c7-4a22-a47d-8c48425ef4a7&`
    const baseSpeciesApiUrl = `https://api.gbif.org/v1/species/`

    const { data: occurenceData, error: occurenceError} = useSWR(baseOccurenceApiUrl, fetcher);
    const { data: speciesData, error: speciesError} = useSWR(() => baseSpeciesApiUrl + occurenceData.results[index].taxonKey + `/vernacularNames`, fetcher);

    if(!occurenceData) return <p className="Processing" >Occurence Database is Loading...</p>;


    if (occurenceError) return <div className="Processing" >Failed to load</div>
    if (!occurenceData) return <div className="Processing" >Occurence Loading...</div>
    if (!speciesData) return <div className="Processing" >Species Loading...</div>


    return (
        <main>
            <div className="Organism">
                <div className="Organism-Photo">
                    <button value="<-" onClick={handleLast}>Last</button>
                    <button value="->" onClick={handleNext}>Next</button>
                    <img id="Plant-Photo" src={occurenceData.results[index].media[0].identifier} alt="Error"/>
                    {/* <input type="text" onKeyDown={handleCountryInput} /> */}
                    {/* <input type="text" onKeyDown={handleStateProvinceInput} /> */}
                    {/* <input type="text" onKeyDown={handleLocalityInput} /> */}
                    <div id="Button-Group">
                    </div>
                </div>
                <div>
                    <Information occurence={occurenceData} species={speciesData} index={index}></Information>
                    <Quiz occurence={occurenceData} species={speciesData} index={index}></Quiz>
                    {/* <h3>{baseOccurenceApiUrl}</h3> */}
                    {/* <h2>{index}</h2> */}
                    {/* <h3>{baseSpeciesApiUrl + occurenceData.results[index].taxonKey + `/vernacularNames`}</h3> */}
                </div>
                
            </div>
            
        </main>
    );
}