# ts-dotnet-errors

A collection of commonly used errors from the .NET world. Enables for creating wrapped errors, and more.

## Install
```
    npm install ts-dotnet-errors
```

## How to use
```js
throw new DepreciatedError();

throw new NotImplementedError('Method Foo() has not been implemented.');

try {
    loadDatabase();
}
catch(error) {
    throw new DatabaseError('Unknown error occured.', error);
}
```

## Error types

* ApplicationError
* ArgumentError
* ArgumentNullError
* ArgumentOutOfRangeError
* ArithmeticError
* DatabaseError
* DepreciatedError
* DivideByZeroError
* FileNotFoundError
* IndexOutOfRangeError
* IOError
* NotImplementedError
* NotSupportedError
* NullReferenceError
* OverflowError