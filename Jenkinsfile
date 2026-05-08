pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/jyothigandla/fullstack-eb-app.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy to Elastic Beanstalk') {
            steps {
                sh '''
                /home/ubuntu/myenv/bin/eb deploy
                '''
            }
        }
    }
}
