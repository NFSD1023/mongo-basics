const Post = require("../models/Post");

async function incrementVisits(post) {
  post.visits += 1
  await Post.updateOne(
    {
      _id: post._id
    },
    {
      $inc: {
        visits: 1
      }
    }
  )
}

const postController = {
  getAllPosts: async (req, res) => {
    console.log("Llamando a getAllPosts");
    const posts = await Post.find();
    console.log(posts);
    res.json(posts);
  },

  deletePost: async (req, res) => {
    const postId = req.params.postId
    const { deletedCount } = await Post.deleteOne({
      _id: postId
    })

    if (deletedCount === 0) {
      res.status(404).send()
    } else {
      res.json()
    }
  },

  createPost: async (req, res) => {
    const postToCreate = req.body
    const post = new Post(postToCreate)
    await post.save()
    res.json(post)
  },

  getPost: async (req, res) => {
    const post = await Post.findById(req.params.id)
      .populate('author')
    await incrementVisits(post)
    console.log(post)
    res.json(post)
  }
}

module.exports = postController