# Library
A simple library app where users can add, remove, and toggle the read status of books. The app allows users to:

* Add a new book to the library.
* View books with details like title, author, pages, and read status.
* Toggle the read status of books.
* Delete books from the library.

This app is built with HTML, CSS, and JavaScript.
# Features
* Add books to the library with information like title, author, number of pages, and read status.
* Toggle the read status of books (using a button that changes color).
* Delete books from the library.
* Dynamically render books on the page as they are added or removed.

# Technologies Used
* __HTML5:__ For the structure of the page.
* __CSS3:__ For styling and layout (using Flexbox for responsiveness).
* __JavaScript:__ For the functionality, including adding books, toggling read status, and deleting books.

# Future Changes
In future updates, the following features will be added to enhance the functionality of the library app:
1. __Book Database Integration__
    * Instead of manually entering book information, users will be able to search for a book by its title. Once the book is found, users can simply add it to their library with all the details pre-filled (such as author, pages).
    * This feature will involve integrating a books database or API (like Google Books API) to retrieve book details automatically.
2. __Book Cover Images__
    * Each book will have an associated cover image displayed alongside its title, author, and pages. Users can upload a book cover image when adding a book, or the app will automatically fetch it from the database/API based on the book title.
    * This will improve the visual appearance of the library and make it more user-friendly.
3. __User Authentication and Saving Data__
    * Add a user authentication system so users can sign in, save their library, and access it from any device. This will also allow users to create an account and store their books permanently
4. __Sorting and Filtering__
    * Allow users to sort their library by different attributes (e.g., title, author, pages, read status)
    * Add the ability to filter books by their read/unread status for easier browsing