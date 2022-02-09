import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchallService } from '../../services/fetchall.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fetch:FetchallService,private router:Router) { }

  ngOnInit(): void {
  }
  fileUpload(files: File[]) {
    var local_files =[]
      for (const item of files) {
        local_files.push(item)
      }
    this.sendFile(local_files)
  }

  sendFile(files:any[]=[]){
    let user =  localStorage.getItem('email');
    let formData: FormData = new FormData();
    formData.append("user", user!);
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
    this.fetch.send(formData).subscribe((data:any)=>{
      console.log("success")
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/home']);
    }, (error:any)=>{
    alert("something went wrong")
    })
    }
  
    logout(){
      let user =  localStorage.removeItem('email');
      this.router.navigateByUrl('/');
    }


}
