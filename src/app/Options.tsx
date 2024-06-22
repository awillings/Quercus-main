import { useState } from "react";

export default function Options({setOptions}: {setOptions: any}) {

    let optionsList = {
        continent: null,
        country: null,
        stateProvince: null,
        degreeOfEstablishment: null,
        redList: null,
        kingdomKey: null,
        phylumKey: null,
        orderKey: null,
        familyKey: null,
        genusKey: null
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.log(event.target[1])
        optionsList = {
            continent: event.target[0].value,
            country: event.target[1].value,
            stateProvince: event.target[2].value,
            degreeOfEstablishment: event.target[3].value,
            redList: event.target[4].value,
            kingdomKey: event.target[5].value,
            phylumKey: event.target[6].value,
            orderKey: event.target[7].value,
            familyKey: event.target[8].value,
            genusKey: event.target[9].value
        }
        setOptions(optionsList)
        console.log(optionsList.country)
    }

    return (    
        <form onSubmit={handleSubmit} id="Options">
            <label htmlFor="Continent">Continent:</label>
            <input id="Continent" type="text" />
            <label htmlFor="Country">Country:</label>
            <input id="Country" type="text" />
            <label htmlFor="StateProvince">State/Province:</label>
            <input id="StateProvince" type="text" />
            <label htmlFor="degreeOfEstablishment">Degree Of Establishment:</label>
            <input id="degreeOfEstablishment" type="text" />
            <label htmlFor="redList">Red List Status:</label>
            <input id="redList" type="text" />
            <label htmlFor="KingdomKey">Kingdom (Number):</label>
            <input id="KingdomKey" type="text" />
            <label htmlFor="PhylumKey">Phylum (Number):</label>
            <input id="PhylumKey" type="text" />
            <label htmlFor="OrderKey">Order (Number):</label>
            <input id="OrderKey" type="text" />
            <label htmlFor="FamilyKey">Family (Number):</label>
            <input id="FamilyKey" type="text" />
            <label htmlFor="GenusKey">Genus (Number):</label>
            <input id="GenusKey" type="text" />
            <br />
            <br />
            <button type="submit"></button>
        </form>
    );

}

/*

Continent: continent array[string]
Country: country array[string]
State/Province = stateProvince array[string]
Degree of Establishment: degreeOfEstablishment array[string] https://registry.gbif.org/vocabulary/DegreeOfEstablishment/concepts
RedList Category = iucnRedListCategory array[string] EXTINCT, EXTINCT_IN_THE_WILD, REGIONALLY_EXTINCT, CRITICALLY_ENDANGERED, ENDANGERED, VULNERABLE, NEAR_THREATENED, LEAST_CONCERN, DATA_DEFICIENT, NOT_APPLICABLE, NOT_EVALUATED

            <div className="Option-Container">
                <label htmlFor="Continent">Continent:</label>
                <input id="Continent" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="Country">Country:</label>
                <input id="Country" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="StateProvince">State/Province:</label>
                <input id="StateProvince" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="degreeOfEstablishment">Degree Of Establishment:</label>
                <input id="degreeOfEstablishment" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="redList">Red List Status:</label>
                <input id="redList" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="KingdomKey">Kingdom (Number):</label>
                <input id="KingdomKey" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="PhylumKey">Phylum (Number):</label>
                <input id="PhylumKey" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="OrderKey">Order (Number):</label>
                <input id="OrderKey" type="text" />
            </div>
            <div className="Option-Container">
                <label htmlFor="FamilyKey">Family (Number):</label>
                <input id="FamilyKey" type="text" />
            </div>
            <div className="Option-Container">  
                <label htmlFor="GenusKey">Genus (Number):</label>
                <input id="GenusKey" type="text" />
            </div>

*/