const { Sails } = require("sails")

const post1 = {id: 1, title: 'post title 1',
 body: 'this is my body'}
const post2 = {id: 2, title: 'post title 2', 
 body: 'this is my body 2'}


module.exports = {
    posts: function(req, res){
        const post1 = {id: 1, title: 'post title 1', body: 'this is my body'}
        const post2 = {id: 2, title: 'post title 2', body: 'this is my body 2'}
        //res.send('here we are hitting the /posts endpoint lolo')

        res.send([post1, post2])

        Sails.log.debug['titulo ' + title]
        Sails.log.debug['cuerpo ' + body]
    },

    create: function(req, res){
        const title = req.param('title')
        const body = req.param('body')
        console.log(title + " "+ body)

        Sails.log.debug(title+" "+body)
        const newPosts = {id: 4, title: title, body: body}
        //allPosts.push(newPosts)

        res.end()
    },

    findById: function(req, res){
        const postId = req.param('postId')

        //const filteredPosts = allPosts.filter(p => {return p.id == postId})

        /*
        const filteredPosts = allPosts.filter(function(p){
            return p.id == postId
        })
        

        if (filteredPosts.length > 0){
            res.send(filteredPosts[0])
        }
        else{
            res.send('failed to find post by Id: '+postId)
        }
        */
        res.send(postId)
        
    }
}