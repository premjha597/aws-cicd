stage('Deploy') {
    steps {
        sh '''
            sudo rsync -av --delete \
                --exclude='.git' \
                --exclude='Jenkinsfile' \
                ./ /var/www/html/
        '''
    }
}
