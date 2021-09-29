const uuidv4 = require('uuid').v4()

let employee = {
    id:'',
    firstName:'',
    lastName:'',
    sse:''
}

function created_uuid(){
 return uuidv4;
}

function createRand(arrLength){
 return Math.floor(Math.random() * (arrLength || 1000) )
}

function get_randomArrIndex(arr, ran){
    let nameLength = arr.length
    let num = ran(nameLength)
    return num
}

function generateRandomName(randI, randNum ){
    let names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan"];
    return names[randI(names, randNum)]
}

function generateRandomSurname(randI, randNum ){
    let surnames = [ "Billinsley", "Billiot", "Billiott", "Billips", "Billiter", "Billman", "Billo", "Billock", "Billon", "Billops", "Billot", "Billotte", "Billotti", "Billow", "Bills", "Billue", "Billups", "Billus", "Billy", "Bilodeau", "Bilotta", "Bilotti", "Bilotto", "Bilous", "Bilsborough", "Bilski", "Bilson", "Bilton", "Biltz", "Bilyeu", "Bimler", "Bina", "Binam", "Bindas", "Bindel", "Binder", "Binderup", "Bindrup", "Bineau", "Binegar", "Bines", "Binet", "Binette", "Binetti", "Binford", "Bing", "Bingaman", "Bingamon", "Binger", "Bingert", "Binggeli", "Bingham", "Bingle", "Bingler", "Bingley", "Bingman", "Binienda", "Bininger", "Binion", "Bink", "Binker", "Binkerd", "Binkiewicz", "Binkley", "Binkowski", "Binks", "Binn", "Binner", "Binney", "Binnicker", "Binnie", "Binning", "Binns", "Binsfeld", "Binstock", "Bintliff", "Bintner", "Bintz", "Binz", "Bio", "Bionda", "Biondi", "Biondo", "Biondolillo", "Biorkman", "Bippus", "Bir", "Birak", "Birch", "Birchall"]
    return surnames[randI(surnames, randNum)]
}

function createEmployee(name, surname, index, uuid, ran){
 employee;
 employee.id = uuid();
 employee.firstName = name(index, ran);
 employee.lastName = surname(index, ran);
 employee.sse = ran();
 return employee;
}

module.exports = createEmployee