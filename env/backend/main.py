from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict
import json
import networkx as nx

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: str = Form(...)):
    try:

        pipeline_data = json.loads(pipeline)

        nodes = pipeline_data["nodes"]
        edges = pipeline_data["edges"]

        num_nodes = len(nodes)
        num_edges = len(edges)

        G = nx.DiGraph()

        for node in nodes:
            G.add_node(node["id"])
        for edge in edges:
            G.add_edge(edge["source"], edge["target"])

        is_dag = nx.is_directed_acyclic_graph(G)

        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": is_dag
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
