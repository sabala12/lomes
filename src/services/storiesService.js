import http from "../http-common";

class StoryService {

        getStoryList(lan) {
                return http.get(`/stories/${lan}`,);
        }

        getStory(id) {
                return http.get(`/story/${id}`);
        }

        getStoryPreface(id) {
                return http.get(`/story_preface/${id}`);
        }

/*  create(data) {
    return http.post("/stories", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }*/
}

export default new StoryService();
