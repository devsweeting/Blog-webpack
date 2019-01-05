export function blog() {
  this.posts = [];
  this.currentId = 0;
}

blog.prototype.addPost = function(post) {
  post.id = this.assignId();
  this.posts.push(post);
};

blog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

blog.prototype.findPost = function(id) {
  for (var i = 0; i < this.posts.length; i++) {
    if(this.posts[i]) {
      if (this.posts[i].id == id) {
        return this.posts[i];
      }
    }
  }
  return false;
};

export function post(title, content) {
  this.title = title,
  this.content = content;
}
