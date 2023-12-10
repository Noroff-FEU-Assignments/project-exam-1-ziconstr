// document.addEventListener("DOMContentLoaded", function () {
//   const apiUrl = "https://nadstarr.com/wp-json/wp/v2/posts?per_page=4";

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(posts => {
//       const postsContainer = document.getElementById("posts-container");

//       posts.forEach(post => {
//         const postDiv = document.createElement("div");
//         postDiv.classList.add("post");

//         // Create a link for the title
//         const titleLink = document.createElement("a");
//         titleLink.href = post.link;

//         // Create and append the title
//         const title = document.createElement("h2");
//         title.textContent = post.title.rendered;
//         titleLink.appendChild(title);

//         // Check if the post has a featured image
//         if (post.featured_media) {
//           // Create and append the image
//           const image = document.createElement("img");
//           image.src = post.featured_media.source_url;
//           image.alt = post.title.rendered;
//           postDiv.appendChild(image);
//         }

//         // Create and append the content preview
//         const contentPreview = document.createElement("div");
//         contentPreview.innerHTML = post.excerpt.rendered;

//         // Create a "Read More" link
//         const readMoreLink = document.createElement("a");
//         readMoreLink.classList.add("read-more");
//         readMoreLink.textContent = "Read More";
//         readMoreLink.href = post.link;

//         // Append elements to post container
//         postDiv.appendChild(titleLink);
//         postDiv.appendChild(contentPreview);
//         postDiv.appendChild(readMoreLink);
//         postsContainer.appendChild(postDiv);
//       });
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://nadstarr.com/wp-json/wp/v2/posts?per_page=4";

  fetch(apiUrl)
    .then(response => response.json())
    .then(posts => {
      const postsContainer = document.getElementById("posts-container");

      posts.forEach(async post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        // Create a link for the title
        const titleLink = document.createElement("a");
        titleLink.href = post.link;

        // Create and append the title
        const title = document.createElement("h2");
        title.textContent = post.title.rendered;
        titleLink.appendChild(title);

        // Check if the post has a featured image
        if (post.featured_media) {
          // Fetch the media details separately
          const mediaResponse = await fetch(`https://nadstarr.com/wp-json/wp/v2/media/${post.featured_media}`);
          const mediaData = await mediaResponse.json();

          // Check if the featured image has a source URL
          if (mediaData.source_url) {
            // Create and append the image
            const image = document.createElement("img");
            image.src = mediaData.source_url;
            image.alt = post.title.rendered;
            postDiv.appendChild(image);
          }
        }

        // Create and append the content preview
        const contentPreview = document.createElement("div");
        contentPreview.innerHTML = post.excerpt.rendered;

        // Create a "Read More" link
        const readMoreLink = document.createElement("a");
        readMoreLink.classList.add("read-more");
        readMoreLink.textContent = "Read More";
        readMoreLink.href = post.link;

        // Append elements to post container
        postDiv.appendChild(titleLink);
        postDiv.appendChild(contentPreview);
        postDiv.appendChild(readMoreLink);
        postsContainer.appendChild(postDiv);
      });
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
});