import Post from '../models/Post';

class PostController {
  async store(req, res) {
    try {
  
    const { title, content, tags } = req.body;

    const post = await Post.create({
      user_id: req.userId,
      title,
      content,
      tags,
    })

    return res.json(post);
  } catch(err) {
    console.log(err);
  }
  }
}

export default new PostController();