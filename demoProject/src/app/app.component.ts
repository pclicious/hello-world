import { Component } from '@angular/core';
import {DataService} from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[trigger('MyAwesomeAnimation',[
    state('large',style({
      transform: 'scale(1)',
    })),
    state('small',style({
      transform: 'scale(1.2)',
    })),
    transition('small <=> large', animate('300ms ease-in', keyframes([
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
      style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
      style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
    ]))),
  ]),
  ]
})
export class AppComponent {
  state: string = 'small';
  constructor(private dataService:DataService){}   //Dependency Injection
  someProperty:string;
  ngOnInit(){
    console.log(this.dataService.cars);
    this.someProperty=this.dataService.myData();
  }
  title = 'app';
  event=''
  titleClass='red-title';  //titleClass=false{red goes away}
  pstyle="red"
  myObject={
    gender:'male',
    age:33,
    location:'USA'
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
}

  myArr = ['him','hers','yours']
  myStyles ={
    'red-title':true,
    'large-title':true
  }
  myEvent(event){
    console.log("event");
  }
}
