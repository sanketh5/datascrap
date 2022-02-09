import { Component, OnInit } from '@angular/core';
import {FetchallService} from '../../services/fetchall.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fetch:FetchallService) { }
  data:any[]=[]

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
   let user =  localStorage.getItem('email');
   console.log(user)
   this.fetch.fetch(user).subscribe((data:any)=>{
    //  data = JSON.parse(data)
    this.data =data['data']
     console.log(data)
   },(error:any)=>{
     console.log("error")
   })
  }

}
