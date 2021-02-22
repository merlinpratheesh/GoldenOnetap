import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  names: FormGroup;

  constructor(public developmentservice: UserdataService,private router: Router) {

    this.names = new FormGroup({
      projectName: new FormControl(),
      description: new FormControl(),
      creationDate: new FormControl(),
      profileName: new FormControl(),
      photoUrl: new FormControl(),
      projectUid: new FormControl()
    });
   }

  ngOnInit(): void {
  }
  NavigateBack(){
    this.router.navigate(['']);
  }
  NavigateNext(){
    this.router.navigate(['/loggedin']);
  }
}
