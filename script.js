const library = document.querySelector(".library")
const newBookBtn = document.querySelector("dialog + .new-book")
const dialog = document.querySelector("dialog")
const addBookBtn = document.querySelector(".add-btn")
const closeBtn = document.querySelector(".close-btn")
const myLibrary = []

let book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rolling", 223, true)
let book2 = new Book("Harry Potter and the Chamber of Secrets", "J. K. Rolling", 352, false)
let book3 = new Book("The Tainted Cup", "Robert Jackson Bennett", 432, true)
let book4 = new Book("The Tainted Cup", "Robert Jackson Bennett", 432, true)
let book5 = new Book("The Tainted Cup", "Robert Jackson Bennett", 432, true)



myLibrary.push(book1, book2, book3, book4, book5)

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator when using this constructor")
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    updateDisplay()
}

function updateDisplay() {
    library.textContent = ""

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div")
        const bookTitle = document.createElement("h2")
        const authorName = document.createElement("p")
        const pages = document.createElement("p")

        div.classList.add("card")
        bookTitle.classList.add("title")
        authorName.classList.add("author")
        pages.classList.add("pages")
        bookTitle.textContent = myLibrary[i].title
        authorName.innerHTML = `<strong>Author:</strong> ${myLibrary[i].author}`
        pages.innerHTML = `<strong>Pages:</strong> ${myLibrary[i].pages}`

        div.appendChild(bookTitle)
        div.appendChild(authorName)
        div.appendChild(pages)
        library.appendChild(div)
    }
}

newBookBtn.addEventListener("click", () => {
    dialog.showModal()
})

addBookBtn.addEventListener("click", (event) => {

    event.preventDefault()

    const bookTitle = document.querySelector("#titleInput").value
    const bookAuthor = document.querySelector("#authorInput").value
    const bookPages = document.querySelector("#pagesInput").value

    if (bookTitle == "" || bookAuthor == "" || bookPages == "") {
        alert("Please Fill In All Required Fields")
        return false;
    }

    addBookToLibrary(bookTitle, bookAuthor, bookPages, true)
    document.querySelector("#titleInput").value = ""
    document.querySelector("#authorInput").value = ""
    document.querySelector("#pagesInput").value = ""

    dialog.close()
})

closeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.querySelector("#titleInput").value = ""
    document.querySelector("#authorInput").value = ""
    document.querySelector("#pagesInput").value = ""

    dialog.close()
})

updateDisplay()