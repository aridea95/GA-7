// Buatlah sebuah Class Student, yang memiliki atribut berikut:
// ● Name,
// ● Age,
// ● Date of Birth,
// ● Gender
// ● Student ID (bisa berupa angka atau teks), dan
// ● Hobbies (bisa menampung lebih dari 1 hobi).
// Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:
// ● SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
// ● SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka
// ● SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
// ● SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya
// bisa menerima nilai Male atau Female
// ● addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks
// ● removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi
// apa yang akan dihapus
// ● getData: menampilkan seluruh data atribut murid

class Student {
    constructor (name, age, dateofbirth, gender, studentid, hobbies){
        this.name = name;
        this.age = age;
        this.dateofbirth = dateofbirth;
        this.gender = gender;
        this.studentid = 0;
        this.hobbies = [];
    }
    get Name(){
        return this.name;
    }
    get Age(){
        return this.age;
    }
    get DateofBirth(){
        return this.dateofbirth;
    }
    get Gender (){
        return this.gender;
    }
    get StudentID(){
        return this.studentid;
    }
    get Hobbies(){
        return this.hobbies;
    }
    set setName (Name){
        this.name = Name;
    }
    set setAge (Age){
        this.age = Age;
    }
    set setDateofBirth (DateofBirth){
        this.dateofbirth = DateofBirth;
    }
    set setGender (Gender){
        if (Gender === 'Male' || Gender === 'Female'){
            this.gender = Gender;
        }else {
            this.gender = 'Please input your gender';
        }
    }
    set setHobbies (hobby){
        this.hobbies = hobby;
    }

    addStudentId(){
        let idString = "GA000";
        let idNumber = +1;
        let combine = idString.concat(idNumber);
        this.studentid = combine;
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    removeHobby(hobby){
        let remove = [];
        for (let i=0; i<this.hobbies.length; i++){
            if(this.hobbies[i] !== hobby){
                remove.push (this.hobbies[i]);
            }else{
                continue;
            }
        }
        this.hobbies = [];
        this.hobbies.push (remove);
    }
}

const student = new Student ();
student.name = 'Putra'
student.age = '26'
student.dateofbirth = '13 June 1994'
student.gender = 'Male'

student.addStudentId();
student.addHobby('Gaming');
student.addHobby('Traveling');

console.log(student);
