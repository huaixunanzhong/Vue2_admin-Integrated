
def aly_username = "root" // 阿里云服务器用户名
def aly_server_ip = "101.42.150.216" // 阿里云服务器IP地址
def aly_workspace = "/home" // 阿里云服务器工作目录
def aly_project_name = "vue-admin-all" // 阿里云服务器部署项目名称

stage("部署项目")

node {
    sshagent(credentials: ['ssh-txy-deployment']) {
        sh "ssh -o StrictHostKeyChecking=yes ${aly_username}@${aly_server_ip} \" \
            cd ${aly_workspace}/${aly_project_name} \
            && git pull \
            \""
        sh "ssh -o StrictHostKeyChecking=yes ${aly_username}@${aly_server_ip} \" \
            cd ${aly_workspace}/${aly_project_name} \
            && npm run docker_restart \
            \""
    }
}