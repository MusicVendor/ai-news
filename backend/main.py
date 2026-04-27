from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import news  # adjust if needed

app = FastAPI()

# ✅ Middleware goes HERE
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(news.router)