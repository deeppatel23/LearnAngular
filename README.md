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