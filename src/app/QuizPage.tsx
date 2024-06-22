import Information from './Information'
import Quiz from './Quiz'
import useSWR from 'swr'
import { useEffect, useState } from 'react'

const fetcher = (URL: string) => fetch(URL).then((res) => res.json()).catch(err => console.log(err));
const falseInit = Math.floor(1000 + Math.random() * 500)

export default function QuizPage({options}: {options: any}) {
    
    const [offset, setOffset] = useState(falseInit);
    const [index, setIndex] = useState(0)

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

    const userSpecifications = (options: any) => {
        let additionalQueries = ``;
        for(const [key, value] of Object.entries(options)) {
            if(value == "") {
                additionalQueries += ``
            } else {
                additionalQueries += `${key}=${value}&`
            }
        }
        return additionalQueries;
    }

    let baseOccurenceApiUrl = `https://api.gbif.org/v1/occurrence/search?mediaType=StillImage&offset=${offset}&AdatasetKey=040c5662-da76-4782-a48e-cdea1892d14c&datasetKey=14d5676a-2c54-4f94-9023-1e8dcd822aa0&datasetKey=8a863029-f435-446a-821e-275f4f641165&datasetKey=50c9509d-22c7-4a22-a47d-8c48425ef4a7&${userSpecifications(options)}`
    const baseSpeciesApiUrl = `https://api.inaturalist.org/v1/taxa?`

    const { data: occurenceData, error: occurenceError} = useSWR(baseOccurenceApiUrl, fetcher);
    const { data: speciesData, error: speciesError} = useSWR(() => baseSpeciesApiUrl + `q=${occurenceData.results[index].species}`, fetcher);

    if(!occurenceData) return <p className="Processing" >Occurence Database is Loading...</p>;


    if (occurenceError) return <div className="Processing" >Failed to load</div>
    if (!occurenceData) return <div className="Processing" >Occurence Loading...</div>
    if (speciesError) return <div className="Processing" >Species Call Failed</div>
    if (!speciesData) return <div className="Processing" >Species Loading...</div>

    
    return (
        <div className='Screen'>                                     
            <div className="Organism">
                <div className="Left-Panel">
                    <img id="Plant-Photo" src={occurenceData.results[index].media[0].identifier} alt="Error"/>
                </div>
                <div className="Right-Panel">
                    <Information occurenceData={occurenceData} speciesData={speciesData} index={index}></Information>
                    <Quiz occurenceData={occurenceData} speciesData={speciesData} index={index}></Quiz>
                </div>
            </div>
            <div id="Button-Group">
                <button value="<-" onClick={handleLast}>Last</button>
                <button value="->" onClick={handleNext}>Next</button>
            </div> 
        </div>
    )
}


