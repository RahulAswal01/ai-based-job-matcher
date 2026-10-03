# import os
# from pypdf import PdfReader
# from docx import Document
# from groq import Groq
# from dotenv import load_dotenv
# import json
# from pydantic import BaseModel


# load_dotenv()

# my_api_key = os.getenv("GROQ_API_KEY")

# if not my_api_key:
#     raise ValueError("missing or wrong api key")

# class ticket(BaseModel):
#     Name:str
#     Current_Campany : str 
#     Experience:str
#     Tools : str
#     Matching_Percentage: int

# schema = ticket.model_json_schema()


def sayradhe():
    return "Radhe Radhe"
# # function for read pdf file
# def readpdf(filename):
#     reader = PdfReader(filename)
#     full_text = ""
#     for page in reader.pages:
#         full_text += page.extract_text() + "\n"
#     return full_text


# #function for read word file
# def readword(filename):
#     doc = Document(filename)
#     full_text = "\n".join([p.text for p in doc.paragraphs])
#     return full_text

# client = Groq(api_key = my_api_key)

# inst1 = {
#     "role":"system",
#     "content":f"""User will give a resume. Give me the response must be in json format and must follow this strict schema {schema}. Extract all necessary things to give appropiate json answer."""
# }
# inst2 = {
#     "role":"system",
#     "content":"Nexis Systems is looking for a full-time, hybrid (3 days in office) Software Development Engineer I (SDE 1) with 0 to 2 years of experience to join our Core Data Platform team in Gurugram, where we scale distributed cloud infrastructure to handle billions of daily API requests with under 50ms latency. In this role, you will skip the generic entry-level tasks and dive straight into writing clean, maintainable, and well-tested code in Java, Go, or Python to ship core platform features, own functional components from initial design to production deployment, participate in architecture reviews, and design low-latency REST/gRPC APIs. A typical week will involve building highly scalable microservices, writing rigorous unit and integration tests to maintain our strict >90% code coverage standard, optimizing SQL/NoSQL database queries in PostgreSQL or MongoDB, debugging production incidents alongside senior mentors, and actively engaging in team code reviews where high coachability and clear technical communication are vital. To be successful, you must possess an exceptional foundation in Computer Science fundamentals—including an intuitive grasp of Data Structures, Algorithms (DSA), Object-Oriented Programming (OOPs), and basic System Design—alongside practical exposure to Git version control, Linux environments, and basic Docker containerization. We practice extreme ownership, meaning you do not stop when code is written but ensure it is thoroughly tested and running smoothly in production, and in return, we offer a market-leading compensation package, comprehensive family health insurance, an annual learning budget, and structured mentorship from Staff and Principal Engineers to accelerate your path toward becoming an autonomous system architect."
# }

# # text = readpdf("new.pdf")
# # text = readword("oldResume.docx")

# responseFormat = {
#     "type":"json_object"
# }

# mess1 = {
#     "role":"user",
#     "content":text,
# }

# messList = [inst1,inst2,mess1]

# # Response = client.chat.completions.create(
# #     messages = messList,
# #     model = "openai/gpt-oss-20b",
# #     response_format = responseFormat,
# #     temperature = 0
# # )

# jsonData = Response.choices[0].message.content

# ans = json.loads(jsonData)

# print(f"""Name : {ans["Name"]}""")
# print(f"""Experience : {ans["Experience"]}""")
# print(f"""Tools : {ans["Tools"]}""")
# print(f"""Matching Percentage : {ans["Matching_Percentage"]} """)