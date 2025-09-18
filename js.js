const categoryContainer=document.getElementById('categoryContainer');



const loadCategory=()=>{
    fetch("https://news-api-fs.vercel.app/api/categories")
    .then((res)=>res.json)
    .then((data)=>displayCategory(data.categories))
    .catch((err)=>{
        console.log(err);
        

    })
}

const displayCategory=(categories)=>{
    categories.forEach((li)=>{

        categoryContainer.innerHTML+=`
        <li class="hover:border-b-4 hover:border-red-600 border-red-600 cursor-pointer">${li.title}</li>
        
        `
    })

}

categoryContainer.addEventListener('click',(e)=>{
    const allLi= document.querySelectorAll('li');
    allLi.forEach((li)=>{
        li.classList.remove("border-b-4");
    })

    if(e.target.localName === "li"){
        e.target.classList.add('border-b-4')
    }

})

const loadNewsByCategory=()=>{
    fetch(`https://news-api-fs.vercel.app/api/categories/${categoryId}`)
    .then((res)=>res)
    .then((data)=>showNewsByCategory(data.articles))
    .catch()
}