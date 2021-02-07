import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchPhrase: string, key: string = ''): any[] {
    if (!Array.isArray(value) || !searchPhrase || !key) {
      return value;
    }
    searchPhrase = searchPhrase.toLowerCase();
    return value.filter(item => {
      const stringItem: string = ('' + item[key]).toLowerCase();
      return stringItem.includes(searchPhrase);
    });
  }
}