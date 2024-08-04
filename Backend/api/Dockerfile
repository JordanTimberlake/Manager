# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY ./requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application into the container
COPY ./ /app

# Install Gunicorn
RUN pip install gunicorn

# Expose port 8000
EXPOSE 8000

# Command to run Gunicorn
CMD ["gunicorn", "api.wsgi:application", "--bind", "0.0.0.0:8000"]
