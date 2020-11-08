import http from "../http-common";

class PostsService {

        getDescsByTags(tag) {
                return http.get(`/posts_desc`, {
                        params: {
                                tags: Array(tag)
                        }
                });
        }

        getPostByName(name) {
                return http.get('/post', {
                        params: {
                                name: String(name)
                        }
                });
        }
}

export default new PostsService();
