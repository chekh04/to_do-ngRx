import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, args: string): unknown {
    if (!value) { return null; }
    if (!args) { return value; }

    args = args.toLowerCase();
    let res = value;
    res = res.map(item => ({
      ...item,
      id: '',
      category: {
        ...item.category,
        id: ''
      }
    }));

    return res.filter( item => JSON.stringify(item).toLowerCase().includes(args));
  }

}
