import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from core.config import client

def get_embedding(text):
    response = client.models.embed_content(
        model="gemini-embedding-001",
        contents=text
    )
    return np.array(response.embeddings[0].values)

def article_to_embedding(articles):
    article_embeddings = []

    articles = articles[:10]

    for article in articles:
        text = (article['title'] or '') + " " + (article['description'] or '')
        embedding = get_embedding(text)
        article_embeddings.append({
            "article": article,
            "embedding": embedding
        })
    return article_embeddings

def find_most_relevant_articles(question, articles, top_k=5):
    article_embeddings = article_to_embedding(articles)
    question_embedding = get_embedding(question)

    similarities = []

    for item in article_embeddings:
        sim = cosine_similarity(
            [question_embedding], [item['embedding']])[0][0]
        
        similarities.append((
            sim, item['article']
        ))
    
    similarities.sort(key=lambda x: x[0], reverse=True)

    return [article for _, article in similarities[:top_k]]