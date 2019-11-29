import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(states: any[], category?: any): any {
    return states.filter(element => (element.categoryState) === (category.data.name));
  }
}
