from flask import Flask, request, jsonify

app = Flask(__name__)

# 固定された場所リスト
locations = [
    {"id": 1, "name": "レストランA", "crowded": False},
    {"id": 2, "name": "カフェB", "crowded": False},
    # 他の場所も追加
]

@app.route('/api/locations', methods=['GET'])
def get_locations():
    return jsonify(locations)

@app.route('/api/locations/<int:id>', methods=['PUT'])
def update_location(id):
    data = request.get_json()
    for location in locations:
        if location["id"] == id:
            location["crowded"] = data["crowded"]
            break
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
