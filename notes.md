<!-- Section 2: TypeScript Basics & Basic Types -->
<!-- Core types -->

1. number
   1, 5.3, -10
2. string
   'hi', "hi", `hi`
3. boolean
   true, false
   just these two, no truthy or falsy values
4. object
   {age:30}
   any JS object, more specific types (type of object) are possible

<!-- V12 -->

- JS uses dynamic types: resolved at runtime
- TS uses static types: set during development

<!--Important: Type Casing  -->

- In TypeScript, you work with types like string or number all the times.
- Important: It is string and number (etc.), NOT String, Number etc.
- The core primitive types in TypeScript are all lowercase!

<!-- V15 -->

- Type inference: a built-in feature to understand which type you have in a certain variable or constant.
- That's the job, the core task of TypeScript. Checking types and yelling at us if we're using them incorrectly.
