import Header from "./partials/Header"
import BlogForm from "./components/BlogForm"
import FormHeader from "./components/FormHeader"
export default function Home() {
  return (
    <div>
      <Header/>
      <section className="container page">
        <div className="page-block">
            <FormHeader/>
          <BlogForm/>
        </div>
      </section>
    </div>
  )
}
