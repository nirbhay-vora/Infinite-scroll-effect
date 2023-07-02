const container = document.querySelector(".container")
const loader = document.querySelector(".giphy");
console.log(loader)
let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPosts = async () => {
    loader.style.display = "block"
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data = await response.json();
   
    data?loader.style.display = "none": loader.style.display = "block"

    data.map((curElem, index) => {
        let post = `
        <div class="post">
                <p id="post-id">${postCount++}</p>
                <h1 class="post-heading">${curElem.title}</h1>
                <p class="post-info">${curElem.body}</p>
            </div>
        `
        container.insertAdjacentHTML('beforeend', post)
        // console.log(post)
    })
}

getPosts()

const showData = () => {
    setTimeout(() => {
        pageCount++
        getPosts()
    }, 0    )
}


window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
        console.log("botttom")
        showData()
    }

})