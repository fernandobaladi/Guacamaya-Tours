import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilterStates'
})
export class StatusFilterStatesPipe implements PipeTransform {

  transform(states: any[]): any {
    return states.filter(state => state.data.status);
  }

}
