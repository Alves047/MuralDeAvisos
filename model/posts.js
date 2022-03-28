module.exports = {
  posts: [
    {
      id: "Id",
      title:"Title Example",
      desc: "Desc Example",
    },
  ],
  getAll() {
    return this.posts;
  },

  newPost(title, desc) {
    this.posts.push({ id: GenId(), title, desc });
  },
};

function GenId() {
  return Math.random().toString(36).substring(2);
}
