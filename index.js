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


function BankAccount(owner, accountNumber=Math.floor(Math.random()*(20-1+1))+1, balance=0) {
    this.owner=owner
    this.balance=balance
    this.accountNumber=accountNumber
    this.deposit=function(amount) {
        return this.balance+amount
    }
    this.withdraw=function(amount1) {
        if (amount1>this.balance) {
            console.log('На счету не достаточно денег')
        } else {
           return this.balance-amount1
        }
    }
    this.getAccountInfo=function() {
        console.log(this.owner, this.accountNumber, this.balance)
    }
}
let bankAccount = new BankAccount('Artem')
bankAccount.withdraw(100)
bankAccount.deposit(+prompt('Введите сумму'))
bankAccount.withdraw(100)
bankAccount.getAccountInfo()


function Product(name, price, discount=0) {
    this.name=name
    this.price=price
    this.discount=discount
    this.getFinalPrice=function() {
        // let pprice=price.valueOf()
        // let pdiscount=discount.valueOf()
        return this.price-this.discount
    }
    this.setDiscount=function(newDiscount){
        this.discount==(this.price*newDiscount)/100
    }
    this.getInfo=function() {
        return console.log(this.name,this.price,this.discount)
    }
}
let product=new Product('Колбаса',100)
product.getFinalPrice()
product.setDiscount(+prompt('Введите скидку'))
product.getFinalPrice()
product.getInfo()