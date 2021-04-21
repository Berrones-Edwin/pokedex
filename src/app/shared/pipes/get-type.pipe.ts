import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Type',
})
export class GetTypePipe implements PipeTransform {
  transform(list: Array<Type>, ...args: unknown[]): string {
    let type = list.filter((x) => x.slot === 1)[0]?.type.name;
    let response = `bg-color-${type}-light`;
    return response;
  }
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
