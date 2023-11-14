import {data} from "./data.js";


const metadata = data;
console.log(metadata);

const values = Object.values(metadata).map(metadataInterno => Object.values(metadataInterno));
console.log(values); //devuelve array

console.log(metadata.result.event); //devuelve objeto

for ( let test of Object.values(metadata)){
    console.log(test);
}

const eventos = values.map(event => ({
    date: Reflect.get(event, 'date'),
    description: Reflect.get(event, 'description')
  }));

  
  console.log(eventos);

// Crear un nuevo array con solo los campos necesarios
const newDataArray = values.map(item => ({
    date: item.date,
    description: item.description,
}));

console.log(newDataArray);

// Filtrar las fechas por año (por ejemplo, 2023)
const yearToFilter = 2023;
const filteredDates = newDataArray.filter(item => {
    const date = new Date(item.date);
    return date.getFullYear() === yearToFilter;
});

