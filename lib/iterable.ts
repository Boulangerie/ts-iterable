abstract class IterableObject<T> implements Iterable<T> {

  public [Symbol.iterator](): Iterator<T> {
    let key: number = 0
    return {
      next: (): IteratorResult<T> => {
        let result
        if (this.valid(key)) {
          result = {
            value: this.current(key),
            done: false
          }
          key = this.next(key)
        } else {
          result = {
            done: true
          }
        }
        return result
      }
    }
  }

  protected abstract current(key: number): T

  protected abstract valid(key: number): boolean

  protected next(key: number): number {
    return key + 1
  }

}

export { IterableObject as Iterable }
