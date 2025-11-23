from flask import Flask, jsonify, request
# Import CORS to handle cross-origin requests from the frontend
from flask_cors import CORS 

app = Flask(__name__)
# Enable CORS for development/simple deployment
CORS(app) 

@app.route('/api/hello', methods=['GET'])
def hello():
    """A simple GET endpoint."""
    return jsonify({'message': 'Hello from Flask API!'})

@app.route('/api/submit', methods=['POST'])
def submit_form():
    """Handles POST request with form data."""
    if request.method == 'POST':
        # Get JSON data sent from the Express frontend
        data = request.get_json() 
        name = data.get('name', 'Guest')
        email = data.get('email', 'N/A')
        
        print(f"Received Form Submission: Name={name}, Email={email}") # Log to the server console

        return jsonify({
            'status': 'success',
            'received_data': f'Thank you, {name}. We received your email: {email}',
            'backend_source': 'Flask'
        }), 200
    
    return jsonify({'status': 'error', 'message': 'Invalid method'}), 405

if __name__ == '__main__':
    # In a real setup, Gunicorn handles the running, but this is for local testing
    app.run(port=5000)