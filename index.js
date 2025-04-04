function Car(brand, model, year, isRunning=false) {
    this.brand=brand
    this.model=model
    this.year=year
    this.isRunning=isRunning
    this.startEngine=function() {
        this.isRunning=true
    }
    this.stopEngine=function() {
        this.isRunning=false
    }
    this.getInfo=function(){
        return console.log(this.brand + this.model + this.year + this.isRunning)
    }
}
let car = new Car('CHERY','Arrizo8',2022)
car.startEngine()
car.getInfo()

function Student(name, group) {
    this.name=name
    this.group=group
    let grades={}
    this.addGrade=function(subjectName,grade) {
        grades[subjectName]=grade
        // this.subjectName=subjectName
    }
    this.getAverage=function(){
        let gradeList=Object.values(grades)
        let sum=0;
        for (let i=0; i<gradeList.length; i+=1) {
            sum+=gradeList[i];
        }
        return sum/gradeList.length;
    }
    this.getInfo=function(){
        return console.log(this.name,this.group,grades)
    }
}
let student = new Student('Artem','Python47')
student.addGrade(prompt('Введите название предмета'),+prompt("Введите оценку"))
student.addGrade(prompt('Введите название предмета'),+prompt("Введите оценку"))
console.log(student.getAverage())
student.getInfo()