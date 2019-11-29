import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destinationFilter'
})
export class DestinationFilterPipe implements PipeTransform {

  transform(states: any[], category?: any): any {

    return states.filter(element => (element.categoryState) === (category.data.name));


  }

}
