import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-item-component',
  templateUrl: './user-item-component.component.html',
  styleUrls: ['./user-item-component.component.css']
})
export class UserItemComponentComponent implements OnInit {
  @Input() name: string;   // Here we can add a property that will be reused for all the components of type user-item
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
