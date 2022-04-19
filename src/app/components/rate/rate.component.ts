import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RatesResponse } from 'src/app/models/ratesResponse';

 

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  public rate:RatesResponse={
    amount:0,
    base:'',
    date:'',
    rates:{
      '':0,
    },

  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getCurrencyRate();
  }

  public getCurrencyRate(){
    this.http.get<RatesResponse>("https://api.frankfurter.app/latest?from=EUR&to=USD").subscribe(
      (response)=>{
        this.rate=response;
      }
    )
  }

}
