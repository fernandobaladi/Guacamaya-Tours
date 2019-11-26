import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {

  transform(states: any[]): any {
    return states.filter(state => state.data.status);
  }

}
