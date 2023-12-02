const BlogData = [{
    id:1,
    slug:"top-10-llm",
    title: "Top 10 LLM models for stater",
    description: `n the ever-evolving tech landscape, harnessing the power of Large Language Models (LLMs) has become a cornerstone for startups seeking innovation. From chatbots to content creation and beyond, the versatility of LLMs is unparalleled. However, choosing the right model is pivotal, considering factors like cost, complexity, and suitability for startup environments. To guide you through this decision-making process, I've curated a list of top-notch LLMs, both free and paid, tailored for startups. Let's delve into the features, pros, and cons of each, empowering you to make informed choices for your startup journey. If you're exploring ways to integrate advanced AI
      solutions seamlessly into your startup's operations, check out our AI services at TechloSet. Our tailored solutions cater to diverse business needs, ensuring your venture stays ahead in the realm of technological innovation. Discover the transformative potential of AI with`
},{
    id:2,
    slug:"top-software-house",
    title:"Discover top Software Houses in Faisalabad in 2024",
    description:`In the dynamic world of Information Technology, where innovation is the heartbeat of progress, choosing the right path for your career is paramount. As a job seeker in Faisalabad's tech landscape, the prospect of joining a software house in 2024 is filled with exciting possibilities. With this blog, we embark on a journey to explore the top software houses in Faisalabad, offering a glimpse into the thriving tech scene, a treasure trove of opportunities, and a chance to be part of something extraordinary.`
},{
    id:3,
    slug:"new-javascript",
    title:"Bun: A New JavaScript Runtime that Replaces Node.js",
    description:`A JavaScript runtime is a software environment that executes JavaScript code. JavaScript is a programming language that was originally designed for creating dynamic web pages in browsers. However, JavaScript can also be used for other purposes, such as server-side programming, desktop applications, mobile apps, and even games. To run JavaScript code outside of browsers, you need a JavaScript runtime that can interpret and execute the code. A JavaScript runtime typically consists of two main components: a JavaScript engine and a set of APIs.`
}
]

export default function blogpost({params}:{params:{slug: string}}){
    const selectblog = BlogData.filter((item)=> item.slug === params.slug)
    return(
        <div>
            {selectblog[0]?.description}
        </div>
    )

}