# Use standard Debian-based Python image (not Alpine)
FROM python:3.12

# Work directory inside container
WORKDIR /app

# Install Python deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy built frontend and Flask app
COPY dist ./dist
COPY app.py .

# Expose Flask port
EXPOSE 8080
ENV PORT=8080

# Start server
CMD ["python", "app.py"]
