import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'habsFilter'
})
export class HabsFilterPipe implements PipeTransform {

  transform(habs: any[], habId: any): any {
    if (habId) {
      return habs.filter(hab => (hab.id) === habId);
    } else {
      return habs.splice(0, habs.length);
    }
  }

}
