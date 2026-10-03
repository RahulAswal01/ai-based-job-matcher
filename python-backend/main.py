from fastapi import FastAPI
from analyse import sayradhe
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return "hello bro this is my first api using fastapi for python and ai workflow"

@app.get("/sayradhe")
def say():
    return sayradhe()