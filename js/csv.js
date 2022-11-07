//Parse the CSV data into the necessary arrays
async function getData(){
    const response = await fetch('../data/ZonAnn.TS+dSST.csv');
    const data = await response.text(); //CSV in TEXT format
    const table=data.split('\n').slice(1);  //split by line and cut 0th row
    //console.log(table);
    table.forEach(row=>{                //operate on each row
        const columns = row.split(','); //split each row into col.
        const year = columns[0];        //assign year val
        const temp= columns[1];         //global temp. deviation
        const nhTemp = columns[2];      //NH temp
        const shTemp = columns[3];      //SH temp
        console.log(year,temp,nhTemp,shTemp);
    })
}
getData();