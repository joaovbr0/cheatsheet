# Cheatsheet

Referência rápida de comandos para DevOps e Segurança da Informação, construída com [Docusaurus](https://docusaurus.io/) e componentes [Radix UI](https://www.radix-ui.com/).

**Site:** https://joaovbr0.github.io/cheatsheet/

---

## Categorias

| Categoria | Descrição |
|---|---|
| **Redes** | Ping, Traceroute, SS / Netstat |
| **Netcat** | Uso básico, transferência de arquivos, shells |
| **Segurança** | Nmap, OpenSSL, Hashcat / John |
| **SSH & Curl** | Tunneling, SCP, Rsync, requisições HTTP |
| **Docker** | Imagens, containers, logs, volumes, Compose |
| **Kubernetes** | Contexto, recursos, debug, rollout, port-forward |
| **DevOps** | Git, processos, firewall, grep e find |

## Funcionalidades

- **Busca global** — filtra comandos por nome ou descrição em todas as categorias
- **Copy to clipboard** — copia qualquer comando com feedback visual
- **Accordion** — seções colapsáveis para organização por tópico
- **Dark mode** — segue o tema do sistema automaticamente
- **Responsivo** — layout adaptado para mobile

## Stack

- [Docusaurus 3](https://docusaurus.io/) — gerador de site estático
- [@radix-ui/react-tabs](https://www.radix-ui.com/primitives/docs/components/tabs) — navegação por categoria
- [@radix-ui/react-accordion](https://www.radix-ui.com/primitives/docs/components/accordion) — seções colapsáveis
- [@radix-ui/react-icons](https://www.radix-ui.com/icons) — ícones

## Desenvolvimento local

```bash
npm install
npm start
```

O site abre em `http://localhost:3000`.

## Adicionar comandos

Os comandos estão em [src/components/Cheatsheet/data.js](src/components/Cheatsheet/data.js). Cada categoria segue esta estrutura:

```js
{
  id: 'categoria',
  label: 'Label da Aba',
  sections: [
    {
      title: 'Nome da Seção',
      commands: [
        { cmd: 'comando --flag', desc: 'Descrição do que faz' },
      ],
    },
  ],
}
```

## Deploy

O deploy é automático via GitHub Actions. A cada push na branch `main`, o site é buildado e publicado na branch `gh-pages`.

```
push → main → GitHub Actions → build → gh-pages → GitHub Pages
```

Para rodar manualmente: **Actions → Deploy to GitHub Pages → Run workflow**.
