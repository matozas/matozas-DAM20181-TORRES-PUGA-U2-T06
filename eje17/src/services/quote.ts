import {Injectable}  from "@angular/core";
import {Http}  from "@angular/http";


@Injectable()
export class QuoteService{
  //  private http:any;
    public data:any;
    private _email:string;
3
    constructor(private http:Http){
       // this.http =http;
    }
    
    set email(newVal:string){
        this._email=newVal;
    }
    get email():string{
        return this._email;
    }

    getQuotes(){
        this.http.get("http://localhost:8080/sports.json")
        .subscribe(
            res=>{
                this.data= res.json();
                console.log(this.data);
            },
            error=>{
                console.log(error);
          }
        );
    }
}