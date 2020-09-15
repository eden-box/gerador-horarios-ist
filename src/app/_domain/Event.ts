export class Event {
  constructor(
    private _tag: number,
    private _weekday: string,
    private _start: string,
    private _end: string,
    private _name: string,
    private _place: string
  ) { }

  get tag(): number { return this._tag; }
  set tag(value: number) { this._tag = value; }

  get weekday(): string { return this._weekday; }
  set weekday(value: string) { this._weekday = value; }

  get start(): string { return this._start; }
  set start(value: string) { this._start = value; }

  get end(): string { return this._end; }
  set end(value: string) { this._end = value; }

  get name(): string { return this._name; }
  set name(value: string) { this._name = value; }

  get place(): string { return this._place; }
  set place(value: string) { this._place = value; }
}
