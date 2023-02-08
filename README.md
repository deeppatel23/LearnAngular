# View Encapsulation

1. None: means that its styles will not be encapsulated and will be applied globally to the entire document
2. ShadowDom: means that its styles will be encapsulated within the component and its templates, and will not be accessible to the rest of the application.
3. Emulated: styles will be encapsulated within the component, and Angular will create a unique class for the component and add it to the component's templates. This allows the styles to be applied only to the component and its templates and not to the rest of the application.

The main difference between Emulated and ShadowDom modes is how styles are applied to components and their templates.

Emulated mode is the default view encapsulation mode in Angular. In this mode, Angular creates a unique class for each component and adds it to the component's templates. This allows the component's styles to be applied only to the component and its templates, and not to the rest of the application. The component's styles are encapsulated within the component, but they are still part of the global stylesheet, and they can be overridden by styles from other components.

ShadowDom mode, on the other hand, creates a shadow root for each component, which is a separate DOM tree that is isolated from the rest of the application. This means that the component's styles are encapsulated within the shadow root and cannot be overridden by styles from other components. This mode is only supported in modern browsers that support the Shadow DOM API.

In summary, the Emulated mode is a simulated form of encapsulation that works across all browsers, while the ShadowDom mode provides true encapsulation, but only works in modern browsers that support the Shadow DOM API.