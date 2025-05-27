pipeline {
  agent any

  environment {
    SONAR_TOKEN = credentials('sonar-token-id') // Jenkins credential ID
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQubeServer') {
          sh 'sonar-scanner -Dsonar.login=$SONAR_TOKEN'
        }
      }
    }

    stage('Build & Deploy') {
      steps {
        echo 'Deploying...'
      }
    }
  }
}
