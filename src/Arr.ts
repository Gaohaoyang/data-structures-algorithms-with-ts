class Arr {
  private array: any[]

  public length: number

  constructor(args: [] | number = []) {
    if (typeof args === 'number') {
      const arr: undefined[] = []
      for (let i = 0; i < args; i += 1) {
        arr.push(undefined)
      }
      this.array = arr
    } else {
      this.array = args
    }
    this.length = this.array.length
  }
}

export default Arr
