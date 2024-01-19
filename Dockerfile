# Start from the Apache HTTP Server base image
FROM httpd:2.4

# Set the working directory
WORKDIR /usr/local/apache2/htdocs/

# Copy the website files from your local directory to the Docker image
COPY . .

# Expose port 80 for the Apache HTTP Server
EXPOSE 80

# Start the Apache HTTP Server when the Docker container is run
CMD ["httpd-foreground"]
