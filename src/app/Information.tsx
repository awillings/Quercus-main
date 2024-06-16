
export default function Information(organism: any) {
    const taxonID = organism.occurence.results[organism.index].taxonKey;
    const scientificName = organism.occurence.results[organism.index].scientificName;
    const sex = organism.occurence.results[organism.index].sex;
    const kingdom = organism.occurence.results[organism.index].kingdom;
    const phylum = organism.occurence.results[organism.index].phylum;
    const order = organism.occurence.results[organism.index].order;
    const family = organism.occurence.results[organism.index].family;
    const genus = organism.occurence.results[organism.index].genus;
    const species = organism.occurence.results[organism.index].species;
    const country = organism.occurence.results[organism.index].gadm.level0.name;
    const city = organism.occurence.results[organism.index].gadm.level1.name;
    const region = organism.occurence.results[organism.index].gadm.level2.name;
    const photographer = organism.occurence.results[organism.index].recordedBy;
    const reproductiveStatus = organism.occurence.results[organism.index].reproductiveCondition;

    const checkPrefered = (results) => {
        for(let i = 0; i < results.length; i++) {
            if(results[i].language == "eng" || results[i].language == "") {
                return results[i].vernacularName;
            }
        }
        if (results.length == 0) {
            return species;
        } 
        if (results[0].language != "") {
            return results[0].vernacularName;
        } return results[0].vernacularName

    }

    function formatLocation(country: string, city: string, region: string) {
        if(country != undefined) {
            if(region != undefined) {
                if(city != undefined) {
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

    function checkForQuietUndefined(argument: any) {
        if(argument == undefined) {
            return ""
        } 
        return `${argument}`
    }

    return (
        <div className="Information">
            <h1 className="Information-Element" id="Common-Name">{checkPrefered(organism.species.results)}</h1>
            <h3 className="Information-Element" id="Photo-Info">{formatLocation(country, region, city)} by {checkForUndefinedValue(photographer)}</h3>
            <h2 className="Information-Element" id="Scientific-Name">({checkForUndefinedValue(species)})</h2>
        </div>
    )
}