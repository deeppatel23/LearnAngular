# Pipes

Angular provides several built-in pipes that can be used to format and transform data in templates. Here are some of the most commonly used ones:

- date: formats a date to a string based on a specified format
- async: subscribes to an Observable or Promise and returns the latest value when it emits
- number: formats a number as text with a specified format
- currency: formats a number as a currency
- percent: formats a number as a percentage
- json: formats an object as a JSON string
- slice: extracts a part of an array or string and returns a new array or string
- lowercase: formats a string as lowercase text
- uppercase: formats a string as uppercase text
- titlecase: formats a string as titlecase text

You can use these pipes in your templates by applying them to an expression within the double curly brace syntax: {{ expression | pipeName }}. For example, {{ dateValue | date }} would format the dateValue expression as a date string using the date pipe.

In Angular, pipes can be classified into two types: stateless and stateful.

Stateless Pipes:
Stateless pipes are those pipes which do not maintain any internal state, i.e., their output depends only on the inputs provided to them. For example, a pipe that converts a number to a string is a stateless pipe because it does not maintain any state between the inputs provided to it. These pipes are fast and efficient as they don't need to maintain any internal state.

Stateful Pipes:
Stateful pipes, on the other hand, maintain some internal state and can cause performance issues if not used carefully. These pipes are slower and use more memory as they maintain some internal state. For example, a pipe that filters data based on some condition is a stateful pipe because it maintains the condition between the inputs provided to it.

In general, it's always recommended to use stateless pipes because they are fast and efficient. However, if you need to maintain some internal state in your pipe, you can use stateful pipes. Just make sure to use them carefully to avoid performance issues.