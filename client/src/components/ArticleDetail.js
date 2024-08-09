import { useEffect, useState } from 'react';

const ArticleDetail = ({ match }) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await fetch(`/api/articles/${match.params.id}`);
                const data = await response.json();
                setArticle(data);
            } catch (error) {
                console.error("Échec de l'obtention de l'article:", error);
            }
        };

        fetchArticle();
    }, [match.params.id]);

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{article.name_article}</h1>
            <div>{article.discription}</div>
            <img src={article.image_url} alt={article.name_article} />
            <div>{article.suggestions}</div>
        </div>
    );
};

export default ArticleDetail;