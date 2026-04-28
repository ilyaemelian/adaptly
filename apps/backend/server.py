from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json


STATE = {
    "learner": {"name": "Investor Demo", "path": "Python Foundations", "streak": 7},
    "mastery": {"overall": 78, "python": 60, "data_structures": 45},
    "next_lessons": [
        {"title": "Conditionals", "summary": "Master if-else logic", "minutes": 12},
        {"title": "Loops", "summary": "For, while, and iterator patterns", "minutes": 15},
    ],
    "mentor_hint": "Start with Conditionals; the learner is ready for branching tasks.",
}


class Handler(BaseHTTPRequestHandler):
    def _send(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/api/health":
            self._send(200, {"status": "ok"})
        elif self.path == "/api/demo-state":
            self._send(200, STATE)
        else:
            self._send(404, {"error": "not_found"})

    def do_POST(self):
        if self.path != "/api/progress":
            self._send(404, {"error": "not_found"})
            return
        STATE["mastery"]["overall"] = min(100, STATE["mastery"]["overall"] + 4)
        STATE["learner"]["streak"] += 1
        STATE["mentor_hint"] = "Progress saved. Next: practice loops with a mentor hint."
        self._send(200, STATE)

    def do_OPTIONS(self):
        self._send(204, {})


if __name__ == "__main__":
    ThreadingHTTPServer(("0.0.0.0", 8000), Handler).serve_forever()
