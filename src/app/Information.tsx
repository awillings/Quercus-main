
export default function Information({occurenceData, speciesData, index}: {occurenceData: any, speciesData: any, index: number}) {
    const taxonID = occurenceData.results[index].taxonKey;
    const scientificName = occurenceData.results[index].scientificName;
    const sex = occurenceData.results[index].sex;
    const kingdom = occurenceData.results[index].kingdom;
    const phylum = occurenceData.results[index].phylum;
    const order = occurenceData.results[index].order;
    const family = occurenceData.results[index].family;
    const genus = occurenceData.results[index].genus;
    const species = occurenceData.results[index].species;

    let country = "";
    if(occurenceData.results[index].gadm.level0 != undefined) {
        country = occurenceData.results[index].gadm.level0.name;
    } 

    let city = "";
    if(occurenceData.results[index].gadm.level1 != undefined) {
        city = occurenceData.results[index].gadm.level1.name;
    } 

    let region = "";
    if(occurenceData.results[index].gadm.level2 != undefined) {
        region = occurenceData.results[index].gadm.level2.name;
    }     
    
    const photographer = occurenceData.results[index].recordedBy;
    const reproductiveStatus = occurenceData.results[index].reproductiveCondition;

    const checkPrefered = (results: Array<any>) => {
        return results[0].preferred_common_name
    }

    function formatLocation(country: string, city: string, region: string) {
        if(country != "") {
            if(region != "") {
                if(city != "") {
                    if(city == region) {
                        return "Photographed in " + region + ", " + country;
                    }
                    return "Photographed in " + city + ", " + region + ", " + country
                }
                return "Photographed in " + region + ", " + country
            }
            return "Photographed in " + country
        }
        return "Location Unprovided"
    }

    function checkForUndefinedValue(argument: any) {
        if(argument == undefined) {
            return "Unprovided"
        } 
        return argument;
    }

    return (
        <div className="Information">
            <h1 className="Information-Element" id="Common-Name"><a href={speciesData.results[0].wikipedia_url}>{checkPrefered(speciesData.results)}</a></h1>
            <h3 className="Information-Element" id="Photo-Info">{formatLocation(country, region, city)} by {checkForUndefinedValue(photographer)}</h3>
            <h2 className="Information-Element" id="Scientific-Name">({checkForUndefinedValue(species)})</h2>
        </div>
    )
}