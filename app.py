from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='dist', static_url_path='')

@app.route('/<path:path>')
def static_proxy(path):
    # if file exists in dist/, serve it
    if os.path.exists(os.path.join('dist', path)):
        return send_from_directory('dist', path)
    # else SPA fallback → index.html
    return send_from_directory('dist', 'index.html')

@app.route('/')
def root():
    return send_from_directory('dist', 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 8080)))
