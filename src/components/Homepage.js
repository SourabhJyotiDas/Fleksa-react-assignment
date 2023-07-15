import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/actions/post';
import Card from "./Card.js"
import Loader from "./Loader.js"

export default function Homepage() {

   const { posts, loading } = useSelector((state) => state.post);

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllPosts())
   }, [])


   return (
      <>
         {
            loading ? <Loader /> :
               <div>
                  <section className="text-gray-600 body-font">
                     <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap ">
                              {
                                 posts?.map((ele) => (
                                    <Card key={ele.id} data={ele} />
                                 ))
                              }
                           </div>
                     </div>
                  </section>
               </div>
         }
      </>
   )
}
