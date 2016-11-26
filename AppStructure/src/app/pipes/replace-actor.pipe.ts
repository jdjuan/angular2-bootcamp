import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceActor'
})
export class ReplaceActorPipe implements PipeTransform {

  transform(text: string, username: string): any {
     return text.replace("<username>",username);
  }

}


