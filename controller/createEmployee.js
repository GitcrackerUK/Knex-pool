const uuidv4 = require('uuid')

let employee = {}

function created_uuid(){
 return uuidv4.v4();
}

function createRand(arrLength){
 return Math.floor(Math.random() * (arrLength || 1000) )
}

function get_randomArrIndex(arr){
    let nameLength = arr.length
    let num = createRand(nameLength)
    return num
}

function generateRandomName(){
    let names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan"];
    return names[get_randomArrIndex(names)]
}

function generateRandomSurname(){
    let surnames = [ "Billinsley", "Billiot", "Billiott", "Billips", "Billiter", "Billman", "Billo", "Billock", "Billon", "Billops", "Billot", "Billotte", "Billotti", "Billow", "Bills", "Billue", "Billups", "Billus", "Billy", "Bilodeau", "Bilotta", "Bilotti", "Bilotto", "Bilous", "Bilsborough", "Bilski", "Bilson", "Bilton", "Biltz", "Bilyeu", "Bimler", "Bina", "Binam", "Bindas", "Bindel", "Binder", "Binderup", "Bindrup", "Bineau", "Binegar", "Bines", "Binet", "Binette", "Binetti", "Binford", "Bing", "Bingaman", "Bingamon", "Binger", "Bingert", "Binggeli", "Bingham", "Bingle", "Bingler", "Bingley", "Bingman", "Binienda", "Bininger", "Binion", "Bink", "Binker", "Binkerd", "Binkiewicz", "Binkley", "Binkowski", "Binks", "Binn", "Binner", "Binney", "Binnicker", "Binnie", "Binning", "Binns", "Binsfeld", "Binstock", "Bintliff", "Bintner", "Bintz", "Binz", "Bio", "Bionda", "Biondi", "Biondo", "Biondolillo", "Biorkman", "Bippus", "Bir", "Birak", "Birch", "Birchall"]
    return surnames[get_randomArrIndex(surnames)]
}
function createEmail(name, surname){
    return name+surname+'@gmail.com'
}
function getRandomeGender(){
    let gender;
    let randNum = createRand(10)
    gender = randNum <= 5 ? "Male":"Female"

    return gender
}
function createEmployee(){
 employee;
 employee.uid = created_uuid();
 employee.firstName = generateRandomName();
 employee.lastName =  generateRandomSurname();
 employee.sse = createRand();
 employee.email = createEmail(employee.firstName, employee.lastName);
 employee.gender = getRandomeGender()
 return employee;
}

module.exports = createEmployee