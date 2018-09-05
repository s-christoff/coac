---
author: "Sarah Christoff"
date: 2017-11-04
linktitle: programming-paradigms
title: The Knights of Programming Paradigms
weight: 10
---

Currently Reading: Site Reliability Engineering, Clean Architecture
In my current struggle to learn programming, I'm trying to learn the different paradigms of programming there are. So far, we have:
Structured Programming, Object Orientated Programming, Functional Programming, Procedural Programing.
Let's start from the top:
Structured Programming
"The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard chaos as effectively as possible." - Edsger Dijkstra
Edsger Wybe Dijkstra was a programmer in the 1950s from the Netherlands. He noted that programming was difficult, and due to it being so difficult there was plenty of room for error. Dijkstra was programming back when computers where vacuum tube goliaths and compiling programs could take days. In 1968, Dijkstra coined the term "structured programming" and published "Go To Statements Considered Harmful". Dikstra's article caused a stir in the programming community on whether Go To statements were necessary.
But, what is a goto statement?
Simply put a goto statement says "go to this pointer in memory and do what it says". Structured programming is against the goto statement because it can lead to "spaghetti code", where a bunch of goto pointers are pointing to other pointers, making it hard to understand, and because they are not entirely needed (proven by Dijkstra).
Dijkstra believed programming was harder than theoretical physics, and thought he was up for the challenge on making it easier. He wanted to change programming to follow the basics of mathematical proof. He began testing.
During his testing he found some uses of goto would not allow him to take his divide-and-conquer approach to using proof, but there were "good" uses of goto that were used like "if/then/else" and "do/while" that would allow him to chop up programs into smaller, more easily understandable blocks.
(Pictured: Control Methods)
Two years before, Böhm and Jacopini proved that all programs can be made of three things: sequence, selection, and iteration. With Dijkstra's knowledge, they found that the same control structures that Böhm and Jacopini proved, were the same as Dijkstra's.
Where is structured programming today?
Dijkstra's article started a debate in the programming community, and ultimately as programming matured the 'goto' statement died out, or it's not as uncontrolled as it once was. Structured programming never caught on, but it's methodology is useful today. Breaking your code up into smaller modules, and attempting to prove the presence of bugs is core values of structured programming.
Object Orientated Programming
SmallTalk was the first object orientated programming language that was created in the 1970s by XEROX. Alan Turk is noted as a creator of SmallTalk, and put together the definitive idea of Object Orientated Programming (OOP) in the 1970s as well. OOP has many concepts that it is based upon, but we'll focus on: object, class, abstraction, encapsulation, inheritance, and polymorphism.
Object: This is an instance of a class that contains certain methods and properties to make data achieve a certain state.
Class: A class is a template on how to build a specific object.
Abstraction: This is when you simplify complex things, such as a TV remote abstracts the complexity of the inner workings of a TV and lets you control the TV through a simple interface (the remote). In programming this can be done through objects, classes, and variables.
Encapsulation: Encapsulation takes fields within a private class and makes them accessible through public classes. Wait.. what? Encapsulation is the mechanism that takes code and the data it manipulates and binds it together to make sure nothing bad happens to it. Encapsulation is put into place through Access Methods (public, private, protected).
(Pictured: Inheritance)
Inheritance: This gives the ability to create classes derived off other classes. For example, you may have a base class (parent class) that has attributes that all subclasses (child class) may have, but each individual subclass may have even more attributes that are unique to each subclass.
Polymorphism: Polymorphism is a key concept of OOP, even though it is available in other languages, OOP made polymorphism "safe". Polymorphism lets programmers use the same words to call up different things. In Java, this can be method overloading or method overriding. Method overloading allows for a single method to work in different ways depending on the arguments passed to it, and method overriding allows a method to be invoked differently on whether it is an object in the parent class or child class.
Where is OOP today?
OOP is all around, from SmallTalk, to Java, Python, and more! Object Orientated Programming focuses on the creation of objects and making them interact with one other. It is thought to be the way to convert the "real world" to programming.
Functional Programming
Functional Programming originated from Lambda Calculus, and is said to have came to life sometime in the 1930s. Functional programming avoids changing state and is uses expressions or declarations versus statements.
Expressions vs Statements
An expression evaluates something, such as:
y = m + 1
Where a statement does something
print y
Not changing a variables state eliminates many problems that mutation does. No more race conditions or concurrent update problem! One of functional programming's key goals is to minimize the amount of side effects a program may occur.
What is a side effect?
A side-effect is changing any kind of state, like changing a variable. As stated before, in functional programming variables do not change state. If we reduce the amount of side effects that could occur then we can easily predict the behavior of a program. Functional programming is about writing pure functions, which are idempotent and have no side effects.
Where is Functional Programming today?
Functional Programming is mainly found in academia, but is supported by Common Lisp, Haskell, Clojure, and JavaScript.
Procedural Programming
Procedural Programming uses a series of steps to be carried out from top to bottom. Processors provide hardware support for procedural programming through a stack register, which keeps track of active subroutines of a program.
Procedural Programming takes statements and structures them into procedures. Procedure calls are bound by scope, which are the permissions or visibility something has. A procedure is made of modules, which is made to be a small task or execute one aspect of the function, so that it can be removed or changed with ease. Programs can contain multiple levels and scopes.
Blocks and Scopes
Procedural programming is a block-structured language, which allows a group of statements to be treated as if it were one statement. Each block sets a new scope where variables can be defined and interact with other variables from within that block. Variables in enclosing scopes can interact with one other, but are hidden otherwise.
This is called Lexical Scoping or Static Scoping.
Where is Procedural Programming today?
Procedural Programming is implemented in Golang, C, Fortran, and COBOL. If done properly procedural programming is easy to read, flexible, and easy to maintain if divide into small functions.
If anyone has any books or more information on Procedural Programming, I would love to read it. Finding information online was surprisingly difficult.
There are more paradigms then what I covered, but these are the most interesting to me. Also, if I covered the rest I would lose my mind. For now, I must get back to my projects and recovering from this second surgery.
Current Questions: What are the difference between a type 1, 2, 3 Hypervisor (and why can't I understand it?), why does everyone like Heroku so much, and what is Internet of Things (is it everything?)