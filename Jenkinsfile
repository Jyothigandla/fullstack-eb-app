pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/jyothigandla/fullstack-eb-app.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'eb deploy'
            }
        }
    }
}
