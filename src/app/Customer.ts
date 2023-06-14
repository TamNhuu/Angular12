export class Customer{
    public customerNo: number;
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;

    constructor(customerNo: number, name: string, address: string, city: string, state: string, country: string){
        this.customerNo = customerNo;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}