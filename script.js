const library = document.querySelector(".library")
const newBookBtn = document.querySelector("dialog + .new-book")
const dialog = document.querySelector("dialog")
const addBookBtn = document.querySelector(".add-btn")
const closeBtn = document.querySelector(".close-btn")
const deleteBtn = document.querySelector(".deleteBtn")

let myLibrary = []

//dummy data
let book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rolling", 223, true)
let book2 = new Book("Harry Potter and the Chamber of Secrets", "J. K. Rolling", 352, false)
let book3 = new Book("Under the Same Stars", "Libba Bray", 480, false)
let book4 = new Book("Clockwork Constellation: Chrono Chaos", "Paul Michael Peters", 352, true)
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

Book.prototype.toggleRead = function () {
    this.read = !this.read
}

//Add book to the library
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
    updateDisplay()
}

//Show books
function updateDisplay() {
    library.textContent = ""

    for (let i = 0; i < myLibrary.length; i++) {
        const div = document.createElement("div")
        const bookTitle = document.createElement("h2")
        const authorName = document.createElement("p")
        const pages = document.createElement("p")
        const deleteBtn = document.createElement("button")
        const toggleReadBtn = document.createElement("button")

        div.classList.add("card")
        bookTitle.classList.add("title")
        authorName.classList.add("author")
        pages.classList.add("pages")
        deleteBtn.classList.add("deleteBtn")
        toggleReadBtn.classList.add("toggleReadBtn")
        if (!myLibrary[i].read) {
            toggleReadBtn.classList.add("unread")
        } else {
            toggleReadBtn.classList.add("read")
        }

        bookTitle.textContent = myLibrary[i].title
        authorName.innerHTML = `<strong>Author:</strong> ${myLibrary[i].author}`
        pages.innerHTML = `<strong>Pages:</strong> ${myLibrary[i].pages}`
        deleteBtn.textContent = "Delete"
        toggleReadBtn.textContent = myLibrary[i].read ? "Read" : "Not Read"

        deleteBtn.dataset.id = myLibrary[i].id
        toggleReadBtn.dataset.id = myLibrary[i].id

        div.appendChild(bookTitle)
        div.appendChild(authorName)
        div.appendChild(pages)
        div.appendChild(toggleReadBtn)
        div.appendChild(deleteBtn)
        library.appendChild(div)
    }
}

newBookBtn.addEventListener("click", () => {
    dialog.showModal()
})

//Check and take the user's input 
addBookBtn.addEventListener("click", (event) => {

    event.preventDefault()

    const bookTitle = document.querySelector("#titleInput").value
    const bookAuthor = document.querySelector("#authorInput").value
    const bookPages = document.querySelector("#pagesInput").value
    const bookRead = document.querySelector("#readInput").checked

    if (bookTitle == "" || bookAuthor == "" || bookPages == "") {
        alert("Please Fill In All Required Fields")
        return false;
    }

    addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead)
    document.querySelector("#titleInput").value = ""
    document.querySelector("#authorInput").value = ""
    document.querySelector("#pagesInput").value = ""
    document.querySelector("#readInput").checked = false

    dialog.close()
})

closeBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.querySelector("#titleInput").value = ""
    document.querySelector("#authorInput").value = ""
    document.querySelector("#pagesInput").value = ""

    dialog.close()
})

function showAlert() {
    alertBox.style.display = "block"
}

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
        const bookId = event.target.dataset.id
        myLibrary = myLibrary.filter(book => book.id !== bookId)
        updateDisplay()
    }

    if (event.target.classList.contains("toggleReadBtn")) {
        const bookId = event.target.dataset.id
        const book = myLibrary.find(book => book.id === bookId)

        book.read = !book.read
        if (book.read) {
            event.target.classList.remove("unread")
            event.target.classList.add("read")
        } else {
            event.target.classList.add("unread")
            event.target.classList.remove("read")
        }
        updateDisplay()
    }
})

updateDisplay()