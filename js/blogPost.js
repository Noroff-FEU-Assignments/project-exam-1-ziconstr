// 

const blogContainer = document.querySelector(".blog-post");
const commentsContainer = document.querySelector(".comments");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

const postUrl = `https://nadstarr.com/wp-json/wp/v2/posts/${postId}?_embed`;

async function getPost(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const postTitle = data.title.rendered;
    const postDate = data.date.substring(0, 10);
    const postAuthor = data._embedded.author[0].name;
    const postImage = data._embedded["wp:featuredmedia"]
      ? data._embedded["wp:featuredmedia"][0].source_url
      : "https://www.nadstarr.com/wp-content/uploads/2022/10/placeholder.png";
    const postImageAlt = data._embedded["wp:featuredmedia"]
      ? data._embedded["wp:featuredmedia"][0].alt_text
      : "Photo missing";
    const postContent = data.content.rendered;
    const comments = data._embedded.replies
      ? data._embedded.replies[0].content.rendered
      : "No comments";

    document.title += " " + postTitle;

    blogContainer.innerHTML = "";
    blogContainer.innerHTML += `
    <h1>${postTitle}</h1>
    <p>published ${postDate} by ${postAuthor}</p>
    <img src="${postImage}" alt="${postImageAlt}" />

    ${postContent}
    `;

    commentsContainer.innerHTML = "";
    if (typeof comments === "string") {
      commentsContainer.innerHTML += comments;
    } else {
      commentsContainer.innerHTML = `
        <h2>Comments</h2>
      `;
      comments.forEach((comment) => {
        const commentAuthor = comment.author_name;
        const commentDate = comment.date;
        const commentAuthorAvatar = comment.author_avatar_urls[48];
        const commentContent = comment.content.rendered;

        commentsContainer.innerHTML += `
          <div class="comment">
            <img src="${commentAuthorAvatar}" alt="${commentAuthor} avatar" />
            <p>${commentAuthor}</p>
            <p>${commentDate}</p>
            ${commentContent}
          </div>
        `;
      });
    }

    // Rest of your code...

  } catch (error) {
    blogContainer.innerHTML =
      "There was an error.. See the console for more information.";
    console.log(error);
  }
}

getPost(postUrl);
