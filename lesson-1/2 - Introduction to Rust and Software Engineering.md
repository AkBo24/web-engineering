## What is Software Engineering?

**Software Engineering** is a branch of computer science that involves the design, development, testing, and maintenance of software applications.

-   It's beyond code: it encompasses the entire process of software creation, from initial concept to final deployment and updates.

Key Aspects of Software Engineering

-   **Problem-Solving**: Identifying and solving real-world problems through software solutions.
-   **Design Principles**: Planning and modeling software before coding to ensure it is efficient, scalable, and easy to maintain.
-   **Programming**: Writing and implementing code in various programming languages.
-   **Testing and Debugging**: Ensuring software functions correctly and is free of errors.
-   **Maintenance**: Updating and improving software over time to adapt to new requirements or fix issues.
-   **Teamwork and Communication**: Collaborating with other professionals like developers, project managers, and designers.

Software engineering is crucial in almost every industry, from healthcare to finance, education, entertainment, and beyond.

## Introduction to Rust

##### What is Rust and Why learn it?

**Rust** is a high-level programming language that exposes low-level paradigms.

-   its a combination of Python and C.

Used extensively to build

-   Kernels
-   Engines (Game, browsers)
-   Fantastic for backend

##### Your first Rust program

Go to https://www.programiz.com/rust/online-compiler/ to code in Rust (we will later se how to install rust on your own computer).

Hit "Run"!

-   Look at the `Output`, what was printed there? Where do you see those words in the `main.rs` code?

Can you edit the program to say `Hello <Your Name>`?

-   Hit `Run` again and see if the `Output` is as expected.

Now, let's explore the code:

```Rust
fn main() {
    println!("Hello, World!");
}
```

**The `main()` Function**:
Functions are code that can be repeated–we will learn about them more and use them extensively!

The `main()` function is the entry point–the first thing run in any Rust program.

**The `Print` Statement**:
The `println!` is a `macro` (similar to functions) which prints to the screen. Finally, we end the line with a `;` which indicates the expression is over.

##### Rust Comments

**Comments** are lines of text used to describe the purpose of code.

Comments are completely ignored by the `compiler` and are usually for other programmers to understand what you are writing.

```Rust
// entry point of the program
fn main() {
    // print text on the screen
    println!("Hello, World!");
}
```

The lines `// entry point of the program` and `// print text on to the screen` are comments explaining the following lines.

There are two important types of comments:

-   Line Comment: `//`
-   Block Comment: `/* ... */`

Block Comments allow you to comment out several lines!

```Rust
/*
   I am a block comment!

   I'm seperated into several lines and we are
   all ignored by the compiler!
*/


// line comment - entry point of the program
fn main() {
    // line comment - print text on the screen
    println!("Hello, World!");
}
```
