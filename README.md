
Homework #1
This project is a TypeScript-based library management system built to demonstrate core Object-Oriented Programming (OOP) principles. The architecture focuses on creating a flexible, scalable environment for managing authors, readers, and various book formats.

🛠 OOP Principles Applied
To meet the architectural requirements, the following concepts were implemented:

Encapsulation: Internal data (such as book availability and reader lists) is protected using private or protected modifiers. Access is managed strictly through public methods (getters/setters), ensuring data integrity.

Abstraction: The AbstractBook class serves as a blueprint. It prevents the instantiation of a "generic" book, forcing the system to specify whether a book is a physical Book or an EBook.

Inheritance: Book and EBook extend the base AbstractBook class, inheriting shared properties while allowing for specialized behavior.

Polymorphism: The getDescription() method is overridden in subclasses. This allows the system to handle different book types through a single interface while providing format-specific details.

Aggregation: The Library class acts as a central hub. It aggregates collections of authors, books, and readers without tightly coupling their lifecycles.

Service Layer: Business logic for borrowing and returning books is decoupled into a dedicated BorrowService, following the Separation of Concerns principle.

🚀 Getting Started
1. Install Dependencies: npm install
2. Run the Demo npx ts-node src/main.ts
3. Build the Project:npx tsc
