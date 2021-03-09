import { Component, OnInit } from '@angular/core'; //Angular core tells our program where to find the necessary dependencies 
                                                  // The stuff between brackets is what we will import, and the concept is called destructuring

@Component({// This stuff is called decorators, decoratores start with annotations i.e: metadata added to our code, the selecor is what will be enclosed between our tags.
  selector: 'app-hello-world',   
  templateUrl: './hello-world.component.html', //This stuff is used to specify the html skeleton that will be within our tags. We can also define templates using an html string, enclosed between backticks
  styleUrls: ['./hello-world.component.css'] // Angular uses style encapsulation which means that style applies only to the specified component, it takes an array of strings since we can specify multiple style sheets
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
