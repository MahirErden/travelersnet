// import axios from "axios";

// export const create = async (userId, token, post) => {
//   const config = {
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`
//     }
//   };
//   await axios.post(`/api/post/new/${userId}`, { body: post, config })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };

export const create = (userId, token, post) => {
  //${process.env.REACT_APP_API_URL}
  return fetch(`/api/post/new/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// export const list = () => {
//     return fetch( `/posts`, {
//         method: "GET"
//     })
//     .then(response => {
//         return response.json();
//     })
//     .catch(err => console.log(err));
// };

export const singlePost = postId => {
  // ${process.env.REACT_APP_API_URL}
  return fetch(`/api/post/${postId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listByUser = (userId, token) => {
  //${process.env.REACT_APP_API_URL}
  return fetch(`/api/posts/by/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const remove = (postId, token) => {
  //${process.env.REACT_APP_API_URL}
  return fetch(`/api/post/${postId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const update = (postId, token, post) => {
  console.log(postId, token, post);
  //${process.env.REACT_APP_API_URL}
  return fetch(`/api/post/${postId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const like = (userId, token, postId) => {
  //${process.env.REACT_APP_API_URL}
  return fetch("/api/post/like", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const unlike = (userId, token, postId) => {
  //${process.env.REACT_APP_API_URL}
  return fetch("/api/post/unlike", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const comment = (userId, token, postId, comment) => {
  //${process.env.REACT_APP_API_URL}
  return fetch("/api/post/comment", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId, comment })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const uncomment = (userId, token, postId, comment) => {
  //${process.env.REACT_APP_API_URL}
  return fetch("/api/post/uncomment", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId, comment })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


