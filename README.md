Design Patterns Course — Homework #1
Features & Logic
The system handles interactions between authors, readers, and different book formats.

Applied Principles:
1. Encapsulation: Class fields are kept private or protected. Interaction happens through getters, setters, and dedicated methods to keep the data safe.
2. Abstraction: Used AbstractBook to ensure we never create a "generic" book—it must be either a physical Book or an EBook.
3. Inheritance: EBook and Book inherit shared logic from the abstract base class.
4. Polymorphism: The getDescription() method behaves differently depending on whether it’s a digital or physical copy.
5. Aggregation: The Library class acts as the central hub, managing collections of books, authors, and readers.

Tech Stack
1. Language: TypeScript (Strict)
2. Runtime: Node.js
3. Tools: ts-node for development, tsc for builds.

How to Run
First, install the necessary dependencies:
npm install

To run the demo script directly:
npx ts-node src/main.ts

To make this look like it was written by a real developer (rather than a copy-pasted AI response), we should make it a bit more personal, concise, and structured. A "human" README usually focuses on why the project exists and includes a personal touch or a more casual (yet professional) tone.

Here’s a "human-written" version of your README:

Library Management System
Design Patterns Course — Homework #1
This is a TypeScript-based project designed to model a real-world library environment. The main goal was to practice core OOP principles like encapsulation, inheritance, and polymorphism within a cohesive system.

🛠 Features & Logic
The system handles interactions between authors, readers, and different book formats.

Applied Principles:
Encapsulation: Class fields are kept private or protected. Interaction happens through getters, setters, and dedicated methods to keep the data safe.

Abstraction: Used AbstractBook to ensure we never create a "generic" book—it must be either a physical Book or an EBook.

Inheritance: EBook and Book inherit shared logic from the abstract base class.

Polymorphism: The getDescription() method behaves differently depending on whether it’s a digital or physical copy.

Aggregation: The Library class acts as the central hub, managing collections of books, authors, and readers.

💻 Tech Stack
Language: TypeScript (Strict)

Runtime: Node.js

Tools: ts-node for development, tsc for builds.

🚀 How to Run
First, install the necessary dependencies:

Bash
npm install
To run the demo script directly:

Bash
npx ts-node src/main.ts

If you prefer to compile to JavaScript first:
npx tsc
node dist/main.js

Structure:
1. src/models/ — Core entities (Author, Book, Reader, etc.)
2. src/services/ — Logic for borrowing and returning books.
3. src/main.ts — Demo scenario to test the system logic.