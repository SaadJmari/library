const myLibrary = []

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
}