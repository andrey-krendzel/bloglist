const dummy = (blogs) => {
   return 1;
  }

const totalLikes = (posts_array) => {
   
        const reducer = (sum, item) => {
          return sum + item
        }

          let reduced_likes = 0
        for (let i=0; i< posts_array.length; i++){
            reduced_likes = posts_array[i].likes.reduce(reducer, 0) 
        }
      
        return (reduced_likes/ posts_array.length)
       
      
      
}
  
  module.exports = {
    dummy,
    totalLikes
  }