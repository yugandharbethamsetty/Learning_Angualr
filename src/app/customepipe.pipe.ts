import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customepipe'
})
export class CustomepipePipe implements PipeTransform {

  transform(p: any,whishes:any ): any {
    console.log('pipe value :-',p);
    if(p.Gender=='M'){
       return `Hello Mr ${p.Name} ${whishes}`;
    }
    else{
      return `Hello miss ${p.Name} ${whishes}`;
    }
  }

}
