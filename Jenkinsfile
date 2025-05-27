pipeline {
  agent any

  tools {
    nodejs 'node-24' // This must match the Node.js version name in Jenkins Global Tools
  }

  environment {
    SONAR_TOKEN = credentials('sonar-token-id') // Jenkins credential ID for SonarQube token
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

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
        withSonarQubeEnv('SonarQube') {
          sh 'npx sonar-scanner -Dsonar.login=$SONAR_TOKEN'
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
