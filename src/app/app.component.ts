import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) {

  }
  title = 'Angular Learning';
  //Day-6 
  string_interpolation = 'this is string interpolation Data binding';

  //Day-7
  imagepath1: string = '../assets/nature.jpg'
  imagepath2: string = '../assets/Baby.jpg'
  x = 15;

  test() {    // this function called in string interpolation 
    //console.log('x :-', typeof this.x)
    return this.x;

  }
  cname: string = "special"
  date: Date = new Date();
  localdate: string = new Date().toLocaleDateString();

  timestamp = setInterval(() => {
    this.date = new Date();

  }, 1000);

  // Day-8  propery binding
  isdisabled: boolean = true;

  //Day-9 class binding 
  isactive: boolean = true;

  isimportant: boolean = true
  // Day-10 style binding 
  mystyle: object = {
    'background-color': 'red',
    'border': '1px solid black',
    'padding': '10px'
  };

  // Day-11 Event binding 

  counter: number = 0;
  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }
  // Day-12 two-way-Data Binding 
  city: string = "HYD";
  // Day-13 Directives 
  showhide: boolean = true;

  Movies = ['RRR', 'KGF', 'OG'];
  // Day-14  ngIf 
  Data = ['RRR', 'KGF', 'OG'];
  // Day-15 ngFor 

  mobilesArray = ['Redmi', 'oppo', 'Real me', 'samsung'];

  mobiles = [
    {
      Id: 1,
      Name: 'Samsung',
      model: 'Galaxy S24',
      ram: '8GB',
      price: 74999
    },
    {
      Id: 2,
      Name: 'Apple',
      model: 'iPhone 15 Pro',
      ram: '6GB',
      price: 139900
    },
    {
      Id: 3,
      Name: 'OnePlus',
      model: '12R',
      ram: '16GB',
      price: 45999
    },
    {
      Id: 4,
      Name: 'Xiaomi',
      model: '13 Pro',
      ram: '12GB',
      price: 79999
    }
  ];


  //in  string remove multiple spaces   (for help )
  cleanSpaces(input: string): string {
    return input.replace(/\s{2,}/g, '').trim();
  }

  // Day-16 Switch case 

  num1: number = 8;
  num2: number = 2;
  op: string = "+"


  // Day-17 Pipes 

  currencypipe: any = 2000;
  Upperpipe: string = "yugandhar";
  Lowerpipe: string = "Yugandhar";
  datepipe: Date = new Date();
  jsonpipe: object = {
    name: "Raam",
    age: 25,
    town: "Hyderabad"

  }
  // Day-18 No information 

  // Day- 19 Custom-Pipes 

  // Day-20 Temp Ref Variable 
  tempRefValue: any = ''
  test2(element: any) {
    console.log('Reference Element:', element);
    console.log('Inner Text:', element.innerText);
  }
  // Day- 21 Parent-child component  Deff with component selector 

  // Day-22 Parent-child Communication 
  ctitle: string = "Parent ==> Child test communication with Example of parent to child communication `<mark>@input</mark>`  deciocorater";

  // Day-23 @Input  Decorater  (Parent ==> Child )

  Data1: any = [10, 20, 30, 40]

  // Day-24 @Output  Decorater (Child  ==> Parent )

  RecivedchildData: string = ""
  HandleChildMessage(message: string) {
    this.RecivedchildData = message
  }

  // Day-25 {{ Child ==>  Parent Communication }} [[ using #TempRefVariable]]  ((Child  ==> Parent ))

  //this is Done in Header child ts 

  // Day-26 {{ Child ==> Parent Communication }} [[using @ViewChild Decorater]] ((Child  ==> Parent ))

  @ViewChild(HeaderComponent) header!: HeaderComponent;  // The (! )tells TypeScript “this will definitely be assigned” (avoid compile error)



  // Day-27 DOM Manipulations 
  Domvalue: any = '';
  @ViewChild('DOMtest') dom!: any;

  ngAfterViewInit() {
    this.dom.nativeElement.onkeyup = () => {
      console.log(this.dom.nativeElement.value)
      this.Domvalue = this.dom.nativeElement.value
    }
  }
  // Day-28 viewChild V/s viewChildren 

  // Day-30 Services 

  // Done 

  // Day-29 Routing Demo
  // Done 
  //Day 31 - 35 Routing 

  // Done , some pending 

  // Day- 37 Rout gaurds 


  // Day - 36 HTTP Module servies 
  data: any = ''
  GetData() {

    this.http.get('https://fakestoreapi.com/products?limit=5').subscribe((Result) => {

      console.log("Fack Api Responce :-", Result)
      this.data = Result
    })

  }

  // Day - 38 observbles (& Promises)

  // Day- 39 - 40 ng-Content and Container 

  // Day- 41 - 50  Forms (Template Driven Forms , Reactive Forms )
  // Template Driven Forms
  user = {
    name: '',
    email: ''
  };

  onSubmit1(form: any) {
    console.log('Form submitted:', form.value);
  }
  // Reactive Forms
  userForm2 = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });


  onSubmit2() {
    console.log(this.userForm2.value);
  }
  // Day 51 - 60 Mislanious (different topics like custom directives , async pipes , type annotations   )

  // Day 61 - 67 LifeCycle Hooks 
  //LifeCycle Hooks (8)

  // 1 . ngOnChanges() ==> child component take input or change input   from parent  component 
  // 2 . ngOnInit()
  // 3 . ngDoCheck()
  // 4 . ngAfterViewInit()
  // 5 .  ngAfterViweChecked ()
  // 6 . ngAfterContentInit()
  // 7 . ngAfterContentChecked()
  // 8 . ngOnDestroy()



  // Day 68 - 80 RXJS Topics (Rxjs  Observables , Subject &  operators)

  //  Subjects (simple subject , Behavioral Subject , Replay subject , Async subject )


  // Day 81 - 86 NGRX Topics 


  
  // Last :-  URL Bindings , Encript-Decrypt 

}

