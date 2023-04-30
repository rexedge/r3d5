# r3d5

## Major and Minor Components for UI and Layout and others

### It will be updated regularly

## RxBtn Component

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

| color | string | blue-500 | No | The background color of the button. |
| fontType | string | font-medium | No | The font type of the button. |
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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:7335](http://localhost:7335) with your browser to see the result.
