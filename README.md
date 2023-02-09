# Template Driven Forms

Template-driven forms are normal forms on which you use Angular directives to enable Angular features such as two-way data binding, change notification, validations, and so on.

In Angular, ngModel is a directive that allows two-way data binding between a form control and a model. The ngModel directive can be used in different ways, with or without square brackets or parentheses, as follows:

ngModel: This is used when you want to bind the value of a form control to a property in the component class, but without two-way data binding.

[ngModel]: This is used when you want to bind the value of a form control to a property in the component class and also receive updates from the view. The square brackets indicate that this is a one-way binding from the component to the view.

[(ngModel)]: This is used when you want to bind the value of a form control to a property in the component class with two-way data binding. The square brackets indicate that this is a one-way binding from the component to the view, and the parentheses indicate that this is a one-way binding from the view to the component.

Here's an example to illustrate the differences:
```<input [(ngModel)]="name">```
In this example, the name property in the component class is bound to the value of the input control, with two-way data binding. Any changes to the input control will be reflected in the name property, and any changes to the name property will be reflected in the input control.