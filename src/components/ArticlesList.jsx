import Article from "./Article"



export default function Articles({ articles }) {

    return (
        <div className="container">
            <ul className="list-group list-group-flush">

                {
                    articles.map((item) => {
                        return (
                            <Article key={item.id} title={item.title} />
                        )
                    })
                }

            </ul>
        </div>
    )
}