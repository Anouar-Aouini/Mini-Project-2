import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searchedString: string,propName:string): any {
    if (value.length === 0 || searchedString==="") {
      return value
    }
    const resultArray=[]
    for (let item of value) {
      if (item[propName].toLowerCase().includes(searchedString.toLowerCase().trim()) ) {
           resultArray.push(item)
         }
     }
    return resultArray;
  }
}
