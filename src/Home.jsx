import Bloglist from './Bloglist'
import useFetch from './useFetch' 

const Home = () => {

    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")
    return (
        <>
            {isPending && <div>Loading.....</div>}
            {error && <div>{ error }</div>}
            {blogs && <Bloglist blogs={blogs} title='All blog' />}
        </>
    )
}

export default Home