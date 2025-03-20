// write an array of 3 objects each object conatins 2 properties name and height now short and array values by  height in descending order print name and height in terminal as per sorted height

var array=[
    {
        name: "John",
        height: 5.7
    },
    {
        name: "Neel",
        height: 6
    },
    {
        name: "Ishan",
        height: 6.2
    }
]
    var sortedArray = array.sort((a, b)=>  b.height - a.height); //Descending Order Sorting
    
    // console.log(sortedArray)
    for(person of sortedArray)
    {
        console.log(`${person.name}:${person.height}`)
    }



