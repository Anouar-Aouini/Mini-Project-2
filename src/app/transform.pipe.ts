import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any): any {
    let resultArray = []
    for (let item of value) {
      resultArray.push([{ question:item.question},{ id:item.id},[
      { ans: item.correctAnswer, answer: "true" },
      { ans: item.wrongAnswer1, answer: "false" },
      { ans: item.wrongAnswer2, answer: "false" },
      { ans: item.wrongAnswer3, answer: "false" }
    ].sort(() => (Math.random() > .5) ? 1 : -1)]) ;
    }

    return resultArray;
  }
}
