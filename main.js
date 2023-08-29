const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(`Height: ${wardrobe.height}`)
console.log(`Manufacturer: ${wardrobe.manufacturer}`)
console.log(`contents: ${wardrobe.contents}`)
console.log(`Depth: ${wardrobe.depth}`)
console.log(`Width: ${wardrobe.width}`)
wardrobe.material = "Cedar"
console.log(`Material: ${wardrobe.material}`)


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(`${empireStateBuilding.stories}`)
console.log(`${empireStateBuilding.height}`)
console.log(`${empireStateBuilding.squareFeet}`)
console.log(`${empireStateBuilding.eastWestLength}`)
console.log(`${empireStateBuilding.northSouthLength}`)

const KeyToLookUp1 = "address"
const KeyToLookUp2 = "constructionDate"
const KeyToLookUp3 = "cost"
const KeyToLookUp4 = "owner"
const KeyToLookUp5 = "architect"

const ESBAddress = empireStateBuilding[KeyToLookUp1]
const ESBConstructionDate = empireStateBuilding[KeyToLookUp2]
const ESBCost = empireStateBuilding[KeyToLookUp3]
const ESBOwner = empireStateBuilding[KeyToLookUp4]
const ESBArchitect = empireStateBuilding[KeyToLookUp5]
console.log(ESBAddress)
console.log(ESBConstructionDate)
console.log(ESBCost)
console.log(ESBOwner)
console.log(ESBArchitect)


const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.partTime)
console.log(nashvilleSoftwareSchool.instructors.fullTime)

console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
console.log(nashvilleSoftwareSchool.instructors.partTime[0])