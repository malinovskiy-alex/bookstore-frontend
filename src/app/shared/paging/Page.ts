export class Page<T> {
  constructor(public elements: T[] = [],
              public currentPage: number = 1,
              public totalSize: number = 0) {

  }
}
