const getNom = (idPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then((response) => response.json())
    .then((post) => {
      console.log(post.userId);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) => response.json())
        .then((user) => console.log(user.name));
    });
};
getNom(80);

const getNomAsync = async (idPost) => {
  try {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    const post = await resPost.json();
    console.log(post.userId);

    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = await resUser.json();
    console.log(user.name);
  } catch (err) {
    console.log(err.message);
  }
};
getNomAsync(80);

const getNomAsync2 = async (idPost) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((response) => response.json())
      .then((resPost) => {
        const post = resPost;
        console.log(post.userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((resUser) => {
            const user = resUser;
            console.log(user.name);
          });
      });
  } catch (err) {
    console.log(err.message);
  }
};
getNomAsync2(80);

const getNomAxios = async (idPost) => {
  try {
    const resPost = await axios(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    console.log(resPost.data.userId);

    const resUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );
    console.log(resUser.data.name);
  } catch (err) {
    console.log(err.message);
  }
};
getNomAxios(80);
