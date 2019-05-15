var input = []

    do {
        var check = true
        angka = parseInt(prompt(
            "masukan angka"
        )) - 1
        if(Number.isInteger(angka)){
                input.push(angka)
            }
        if(!Number.isInteger(angka)){
            check = false
            alert("et bukan angka. buka console")
        } 

    } while (check);

    console.log('asc')
    console.log(input.sort((a, b) => a - b));
    console.log('desc');
    console.log(input.sort((a, b) => b-a));
    console.log('arraynya');
    console.log(input)
    console.log('tertinggi');
    console.log(Math.max.apply(null, input)) 
    console.log('terendah');
    console.log( Math.min.apply(null, input)) 
    
    


    