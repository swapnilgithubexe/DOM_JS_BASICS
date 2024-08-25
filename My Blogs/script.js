const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    },
    {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    }
  ];
//Create your function here with the name addBlog which takes a blog object as parameter
function addBlog(blog){
    var element = document.createElement("div");
    element.classList.add("blog-post");
    
    var element2 = document.createElement("div");
    element2.classList.add("blog-header");
    
    var element3 = document.createElement("h2");
    element3.classList.add("blog-title");
    element3.textContent = blog.title;
    
    var element4 = document.createElement("p");
    element4.classList.add("blog-date");
    element4.textContent = blog.date;
    
    var element5 = document.createElement("p");
    element5.classList.add("blog-content");
    element5.textContent = blog.content;
    
    element2.append(element3, element4);
    element.append(element2, element5);
    
    var ul_element = document.querySelector(".blog-list");
    ul_element.append(element);
    
}



//Call each object present in blogData with addBlog.
addBlog({
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
    });
addBlog({
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    });
addBlog({
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    });
//If page does not update the changes automatically please refresh