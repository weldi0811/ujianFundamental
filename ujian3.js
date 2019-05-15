let arrManusia = [
    {nama: 'Alex', umur: 22, job: 'Dev', sex: 'PRIA'},  // ALVIN -> alvin (/toLowerCase()) 
    {nama: 'Alicia', umur: 32, job: 'Dev', sex :'WANITA'},
    {nama: 'Alona', umur: 26, job: 'Dev', sex :'WANITA'},
    {nama: 'Batios', umur: 33, job: 'CEO', sex :'PRIA'},
    {nama: 'Bakhti', umur: 38, job: 'PM', sex :'PRIA'},
    {nama: 'Charlee', umur: 27, job: 'CTO', sex :'PRIA'}
];

let arrJob = [
    'All' ,'DEV', 'CEO', 'PM', 'CTO'
];

// [tr, tr, tr, tr, tr, tr]
// Merender list data ke tabel
var funShow = (index) => {
    var listManusia = arrManusia.map((val) => { // val = {name, age,  job}
        
            return `<tr>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.job}</td>
            <td>${val.sex}</td>
            </tr>`
    })

    var listJob = arrJob.map(val => { // val = string seperti 'All', 'Dev', 'CEO'
        return `<option value='${val}'>${val}</option>`
    })

    document.getElementById('here').innerHTML = listManusia.join('')
    document.getElementById('job').innerHTML = listJob.join('')

}

// INPUT DATA
var funInputData = () => {
    var NAMA = document.getElementById('nama').value
    var UMUR = document.getElementById('umur').value
    var JOB = document.getElementById('jobInput').value
    var SEX = document.getElementsByName('gender')
    var sexinput = ''
    for (var i = 0, length = SEX.length; i < length; i++){
        if (SEX[i].checked == true){
         sexinput = SEX[i].value
  break;
    }
    }

    //benerin nama
    var kapitalSplit = NAMA.toLowerCase().split(' ')
    var hasilKapital = kapitalSplit.map( val =>{ return val.charAt(0).toUpperCase() + val.slice(1); });
    //benerin job
    if(JOB.length>3){ //inputan di jobinput, kalau length lebih dari 3
        var jobSplit = JOB.toLowerCase().split(' ')
        var jobKapital = jobSplit.map( val =>{ return val.charAt(0).toUpperCase() + val.slice(1); }); //charAt index ke 0, di uppercase
        var JOB = jobKapital
    }
    else{
            JOB = JOB.toUpperCase()
        }
    
    if(arrJob.includes(JOB) == false){
        arrJob.push(JOB)
    }
    arrManusia.push({
        nama: hasilKapital.join(' '),
        umur: UMUR,
        job: JOB.join(' '),
        sex : sexinput
    })

    // Cek apakah job yang di input user sudah ada di array 'arrJob'
    

    funShow()

}

// FILTER NAME
var funFilterName = () => {
    var filter = document.getElementById('search').value
    var test = []

    for (var i = 0; i < arrManusia.length; i++){
        var name = arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()
        
        if(name.includes(input)){ // true of false
            test.push(arrManusia[i])
        }

    }

    list = test.map((val) => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job.join()}</td>
        <td>${val.sex}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
    
}

// FILTER UMUR
var funFilterUmur = () => {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    if(!(num1 == '' || num2 == '')){
        var list = arrManusia.filter(val => {
            return (val.umur >= num1 && val.umur <= num2)
        })
    } else {
        list = arrManusia
    }

    list = list.map((val)=> {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job.join()}</td>
        <td>${val.sex}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')

}

// FILTER JOB
funFilterJob = () => {
    // Menu dropdown yang kita pilih
    var selectedJob = document.getElementById('job').value

    // filter selectedJob ke property job yang ada di val ({name, umur, job})
    if(!(selectedJob == 'All')){
        var list = arrManusia.filter ( val => {
            return (val.job.includes(selectedJob))
        })
    } else {
        var list = arrManusia
    }

    list = list.map((val)=> {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job.join()}</td>
        <td>${val.sex}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}

funFilterGender= () => {
     var selectedSex = document.getElementsByName('searchgender')
     var sexinput = ''
     for (var i = 0; i<selectedSex.length; i++){
         if (selectedSex[i].checked == true){
          sexinput = selectedSex[i].value
    break;
     }
     }

         var list = arrManusia.filter ( val => {
             return (val.sex.includes(sexinput))
         })
 
     list = list.map((val)=> {
         return `<tr>
         <td>${val.nama}</td>
         <td>${val.umur}</td>
         <td>${val.job.join()}</td>
         <td>${val.sex}</td>
         </tr>`
     })
 
     document.getElementById('here').innerHTML = list.join('')
}

var funSortNama = () => {

    var list = arrManusia
    arrManusia.sort((a,b) => (a.nama > b.nama) ? 1 : -1)
    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job.join()}</td>
        <td>${val.sex}</td>
        </tr>`
    })
    document.getElementById('here').innerHTML = list.join('')

}
var funSortUmur = () => {
    var list = arrManusia
    arrManusia.sort((a,b) => (a.umur - b.umur))
    
    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job.join()}</td>
        <td>${val.sex}</td>
        </tr>`
    })
    document.getElementById('here').innerHTML = list.join('')

}

var funSortGender = () =>{
    var list = arrManusia
    arrManusia.sort((a,b) => (a.sex > b.sex) ? 1 : -1)
    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job.join()}</td>
        <td>${val.sex}</td>
        </tr>`
    })
    document.getElementById('here').innerHTML = list.join('')

}

var funSortJob = () =>{
    var list = arrManusia
    arrManusia.sort((a,b) => (a.job > b.job) ? 1 : -1)
    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job.join()}</td>
        <td>${val.sex}</td>
        </tr>`
    })
    document.getElementById('here').innerHTML = list.join('')

}


funShow()
