class Ivykis {
    constructor() {
        this.list = [];
    }

    add(name, date, time) {
        this.list.push({name, date, time });
      
    }

    delete(name) {
        this.list = this.list.filter(index=>index.name !== name)
    }
    allList(){
        return this.list
    }

}


const ivent = new Ivykis();


ivent.add("Party", "15-02-2024", "20:00");
ivent.add("Birthday", "31-03-2024", "18:00");
ivent.add("Doctor", "05-04-2024", "09:00");

console.log(ivent.allList());

ivent.delete("Party", "15-02-2024", "20:00")

console.log('Po pasalinimas:', ivent.allList());
