import { useState } from 'react'
import articles from '../assets/articles'
import ArticlesList from './ArticlesList'
import From from './Form'


export default function Main() {

    const [listArticles, setlistArticles] = useState(articles)
    const [newTitle, setNewTitle] = useState('')

    const headleSubmit = (e) => {
        e.preventDefault()

        console.log(e.target);


        const newArticle = {
            id: listArticles.length + 1,
            title: newTitle
        }

        setlistArticles([...listArticles, newArticle])
        setNewTitle('')
    }

    return (
        <>


            <ArticlesList articles={listArticles} setlistArticles={setlistArticles} />

            <From headleSubmit={headleSubmit} newTitle={newTitle} setNewTitle={setNewTitle} />

        </>
    )
}