import React from 'react'

const Blog = () => {
  return (
    <div className='h-screen'>
        <div className="flex justify-around my-[80px] gap-10 mx-10">
            {getBlog().map((step, index) => (
                <div key={index}>
                    <a className='flex flex-col w-full' href='#'>
                        <img className="cursor-pointer" src={step.img} alt=""  />
                        <p className='flex flex-col text-3xl font-medium' href="# ">
                            {step.title}
                        </p>
                    </a>
                    <a className="flex my-2 underline" href="#">
                        {step.callToAction}
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

const getBlog = () => [
    {
        img: "./img/blog001.jpg",
        title: "Aidez vos collaborateurs à se restaurer",
        callToAction : "Créez un compte professionel"
    },
    {
        img: "./img/blog002.jpg",
        title: `Les plats de vos restaurants préférés, livrés chez vous`,
        callToAction: "Ajoutez votre restaurant"
    },
    {
        img: "./img/blog003.jpg",
        title: "Livrez avec UberEats",
        callToAction: "Devenez coursier-partenaire"
    }
]


export default Blog

// width={480} height={480}