import os
from dotenv import load_dotenv
from newsapi import NewsApiClient
from google import genai

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

newsapi = NewsApiClient(api_key=NEWS_API_KEY)
client = genai.Client(api_key=GEMINI_API_KEY)