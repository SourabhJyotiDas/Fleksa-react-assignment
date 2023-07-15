import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
   try {
      dispatch({
         type: "PostsRequest",
      })

      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({
         type: "PostsSuccess",
         payload: data
      })

   } catch (error) {
      dispatch({
         type: "PostsFailure",
         payload: error.message,
      })
   }

}