# RxBtn Component

A custom button component with optional color, font type, and size props.

## Usage

```javascript
Copy code
import RxBtn from './path/to/RxBtn';

// ...

<RxBtn color="red-500" fontType="font-bold" size="py-3 px-6">
  Click me
</RxBtn>
```

## Props

| Name | Type | Default | Required | Description |
| ---- | :--: | :-----: | :------: | :---------- |

|color|string|blue-500|No|The background color of the button.|
|fontType|string|font-medium|No|The font type of the button.|
|size|string|py-2 px-4|No|The size of the button.|
|children|React.ReactNode|-|Yes|The content of the button.|
|props|React.ButtonHTMLAttributes<HTMLButtonElement>|-|No Additional button props.|
|That will be all|

Example

```javascript
Copy code
import RxBtn from './path/to/RxBtn';

// ...

<RxBtn>
  Click me
</RxBtn>
```

```javascript
Copy code
import RxBtn from './path/to/RxBtn';

// ...

<RxBtn color="red-500" fontType="font-bold" size="py-3 px-6">
  Click me
</RxBtn>
```
