# Iterable abstract class for TypeScript
[![Build Status](https://img.shields.io/travis/Boulangerie/ts-iterable.svg?style=flat-square)](https://travis-ci.org/Boulangerie/ts-iterable)
[![Coveralls](https://img.shields.io/coveralls/Boulangerie/ts-iterable.svg?branch=master)](https://coveralls.io/github/Boulangerie/ts-iterable)
[![npm version](https://img.shields.io/npm/v/ts-iterable.svg?style=flat-square)](https://www.npmjs.org/package/ts-iterable)
[![npm downloads](https://img.shields.io/npm/dm/ts-iterable.svg?style=flat-square)](http://npm-stat.com/charts.html?package=ts-iterable&from=2016-01-09)
[![npm dependencies](https://img.shields.io/david/Boulangerie/ts-iterable.svg)](https://david-dm.org/Boulangerie/ts-iterable)
[![npm devDependencies](https://img.shields.io/david/dev/Boulangerie/ts-iterable.svg)](https://david-dm.org/Boulangerie/ts-iterable)
[![npm license](https://img.shields.io/npm/l/ts-iterable.svg)](https://www.npmjs.org/package/ts-iterable)

Make any object iterable with the Typescript Iterable abstract class.
The iterable class uses the standard [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) symbol for iteration.

## Install
The easiest way is to install `ts-iterable` as `dependency`:
```sh
npm install ts-iterable --save
```

## Usage
#### Extending the Iterable abstract class
```ts
class Cart extends Iterable {
  private articles: string[]

  public constructor(...articles) {
    super()
    this.articles = articles
  }

  public valid(key): boolean {
    return key < this.articles.length
  }

  public current(key): any {
    return this.articles[key]
  }
}
```

#### With the `for...of` instruction
```ts
const cart = new Cart('flour', 'eggs', 'milk')
for (const article of cart) {
  console.log(article)
}

// Displays:
// "flour"
// "eggs"
// "milk"
```

#### With the Angular's `ngFor` directive
**cart.component.ts**
```ts
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {

  public cart: Cart

  public constructor() {
    this.cart = new Cart('flour', 'eggs', 'milk')
  }
```

**cart.component.html**
```html
<h1>Your cart</h1>
<ul>
  <li *ngFor="let article of cart">{{article}}</li>
</ul>
```

## License
Code licensed under [MIT License](LICENSE).
