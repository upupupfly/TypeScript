/// <reference path='fourslash.ts' />

//@Filename: file.tsx
//// declare module JSX {
////     interface Element { }
////     interface IntrinsicElements {
////     }
////     interface ElementAttributesProperty { props }
//// }
//// class MyClass {
////   props: {
////     name?: string;
////     size?: number;
//// }
////
//// [|var [|{| "declarationRange": 0 |}nn|]: string;|]
//// var x = <MyClass name={[|nn|]}></MyClass>;

const rangesByText = test.rangesByText();
verify.rangesAreRenameLocations(rangesByText.get("nn"));
