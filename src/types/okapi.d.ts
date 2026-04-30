declare module '@dataforsyningen/okapi' {
  export class Initialize {
    maps: any[];
    constructor(options?: any);
    init(options?: any): void;
    refresh(): void;
  }
}