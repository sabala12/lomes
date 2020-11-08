import boom from '@hapi/boom'

const Posts = require('../models/post.model.js')
const Desc = require('../models/desc.model.js')

const getPostsByName = async (req, reply) => {

        try {
                const posts = await Posts.find()

                return posts

        } catch (err) {
                throw boom.boomify(err)
        }
}

/* The blog just started. 
 * There are not many posts. 
 * Any they are divided by three subjects. 
 * So, default method will return all posts by subject. */
const getDescsByTags = async (req, reply) => {

        try {
                const descs = await Desc.find()

                return descs

        } catch (err) {

                throw boom.boomify(err)
        }
}

export default {
        getDescsByTags,
        getPostsByName,
}

/*const getPostByID = async (req, reply) => {
  try {
    const id = req.params.id
    const post = await Posts.findById(id)
    return post
  } catch (err) {
    throw boom.boomify(err)
  }
}*/
// Add a new car
/*exports.addCar = async (req, reply) => {
  try {
    const car = new Car(req.body)
    return car.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = req.body
    const { ...updateData } = car
    const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteCar = async (req, reply) => {
  try {
    const id = req.params.id
    const car = await Car.findByIdAndRemove(id)
    return car
  } catch (err) {
    throw boom.boomify(err)
  }
}
*/
