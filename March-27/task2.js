const bioData={
    name:"ZMP", 
    age:12, 
    city:"ahmedabad",
    };
    const jsonData=JSON.stringify(bioData); 
    console.log(jsonData);
   
    const objData=JSON.parse(jsonData); 
    console.log(objData);