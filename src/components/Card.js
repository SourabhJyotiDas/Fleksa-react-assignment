import React from 'react'

export default function Card({ data }) {
   return (
      <div>
         <div className="h-full flex items-start my-5 md:my-7">
            <div className="flex-grow pl-6">
               <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">User Id : {data.userId}</h2>
               <h1 className="title-font text-xl font-medium text-gray-900 mb-3">{data.title}</h1>
               <p className="leading-relaxed mb-5">{data.body}</p>
            </div>
         </div>
      </div>
   )
}
