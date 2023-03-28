const getNom = (idPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then((response) => response.json())
    .then((post) => {
      console.log("fetch tot junt -->",post.userId);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((response) => response.json())
        .then((user) => console.log("fetch tot junt -->",user.name));
    });
};
getNom(80);

const getNomAsync = async (idPost) => {
  try {
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    const post = await resPost.json();
    console.log("fetchAsync -->",post.userId);

    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = await resUser.json();
    console.log("fetchAsync -->",user.name);
  } catch (err) {
    console.log("fetchAsync -->",err.message);
  }
};
getNomAsync(80);

const getNomAsync2 = async (idPost) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((response) => response.json())
      .then((resPost) => {
        const post = resPost;
        console.log("fecthAsync tot junt -->",post.userId);
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((response) => response.json())
          .then((resUser) => {
            const user = resUser;
            console.log("fetchAsync tot junt -->", user.name);
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
    console.log("axios -->",resPost.data.userId);

    const resUser = await axios(
      `https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`
    );
    console.log("axios -->",resUser.data.name);
  } catch (err) {
    console.log(err.message);
  }
};
getNomAxios(80);
