const  Article = ({articles}) => {
    if(articles){
        console.log(articles);
        return (
            <div className="article-list">
            { articles.map( (article) => (

                    <div className="article-preview" key={article.id}>
                        { article.id % 2 === 0 ? (
                            <div className="article">
                                <div className="text">
                                    <h1>{article.title}</h1>
                                    <p>{article.body}</p>
                                </div>
                                <img src={article.image} alt={article.alt} />
                            </div>
                            ) : (
                            <div className="article">
                                <img src={article.image} alt={article.alt} />
                                <div className="text">
                                    <h1>{article.title}</h1>
                                    <p>{article.body}</p>
                                </div>
                            </div>
                            )}
                    </div>
            ))}
            </div>
        );
    }
       
}
 
export default Article ;